import {Component, OnInit} from '@angular/core';
import {ProjectLoaderService} from '../../services/project-loader.service';
import {Project} from '../../interfaces/project';
import {NgForOf, NgIf} from '@angular/common';

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

  homePageProjects: Project[] = [];
  imageIndex: number = 0;
  numberOfProjects: number = 0;

  //animation
  isAnimating: boolean = false;
  loopedProjects: Project[] = [];
  intervalId: any;
  isPaused: boolean = false;

  constructor(private projectLoader: ProjectLoaderService) {
  }

  ngOnInit(): void {
    const projects = this.projectLoader.getHomePageProjects();

    this.homePageProjects = projects;
    this.numberOfProjects = projects.length;

    if (projects.length > 0) {
      const first = projects[0];
      const last = projects[projects.length - 1];

      this.loopedProjects = [last, ...projects, first];
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
    if (this.isAnimating || this.numberOfProjects == 0) {
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
    if (this.isAnimating || this.numberOfProjects == 0) {
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
    if (this.numberOfProjects === 0) {
      return 0;
    }

    let index = this.imageIndex - 1;

    if (index < 0) {
      index = this.numberOfProjects - 1;
    }

    if (index >= this.numberOfProjects) {
      index = 0;
    }

    return index + 1;
  }


}
