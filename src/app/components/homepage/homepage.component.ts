import {Component, OnInit} from '@angular/core';
import {NgForOf, NgIf} from '@angular/common';
import {Language, LanguageService} from '../../services/language.service';
import {HomepageProjectModel} from '../../models/homepage-project-model';
import {HOMEPAGE_PROJECT_DATA} from '../../data/homepage-project-data';

@Component({
  selector: 'app-homepage',
  imports: [
    NgForOf,
    NgIf,
  ],
  templateUrl: './homepage.component.html',
  styleUrl: './homepage.component.css'
})
export class HomepageComponent implements OnInit {

  homePageProjects: HomepageProjectModel[] = [];
  imageIndex: number = 0;
  numberOfImages: number = 0;
  currentLang: Language = 'hu';

  //animation
  isAnimating: boolean = false;
  loopedProjects: HomepageProjectModel[] = [];
  intervalId: any;
  isPaused: boolean = false;

  constructor(private languageService: LanguageService) {
  }

  ngOnInit(): void {
    this.languageService.language$.subscribe(lang => {
      this.currentLang = lang;
    })

    const homeProjects = HOMEPAGE_PROJECT_DATA;

    this.homePageProjects = homeProjects;
    this.numberOfImages = homeProjects.length;

    if (homeProjects.length > 0) {
      const first = homeProjects[0];
      const last = homeProjects[homeProjects.length - 1];

      this.loopedProjects = [last, ...homeProjects, first];
      this.imageIndex = 1;
    } else {
      this.loopedProjects = [];
      this.imageIndex = -1;
    }
    this.startAutoSlide();
  }

  startAutoSlide() {
    this.intervalId = setInterval(() => {
      if (!this.isPaused) {
        this.nextProject();
      }
    }, 5000);
  }

  nextProject() {
    if (this.isAnimating || this.numberOfImages == 0) {
      return;
    }

    this.isAnimating = true;
    this.imageIndex++;

    if (this.imageIndex == this.loopedProjects.length - 1) {
      setTimeout(() => {
        this.isAnimating = false;
        this.imageIndex = 1;
      }, 2000);
    } else {
      setTimeout(() => {
        this.isAnimating = false;
      }, 2000);
    }
  }

  previousProject() {
    if (this.isAnimating || this.numberOfImages == 0) {
      return;
    }

    this.isAnimating = true;
    this.imageIndex--;

    if (this.imageIndex == 0) {
      setTimeout(() => {
        this.isAnimating = false;
        this.imageIndex = this.loopedProjects.length - 2;
      }, 2000);
    } else {
      setTimeout(() => {
        this.isAnimating = false;
      }, 2000);
    }
  }

  pauseAutoSlide() {
    this.isPaused = true;
  }

  resumeAutoSlide() {
    this.isPaused = false;
  }

  get displayIndex(): number {
    if (this.numberOfImages === 0) {
      return 0;
    }

    let index = this.imageIndex - 1;

    if (index < 0) {
      index = this.numberOfImages - 1;
    }

    if (index >= this.numberOfImages) {
      index = 0;
    }

    return index + 1;
  }


}
