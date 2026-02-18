import {Component, OnInit} from '@angular/core';
import {NgForOf, NgIf} from '@angular/common';
import {Language, LanguageService} from '../../services/language.service';
import {HomepageProjectModel} from '../../models/homepage-project-model';
import {ProjectLoaderService} from '../../services/project-loader.service';
import {RouterLink} from '@angular/router';

@Component({
  selector: 'app-homepage',
  imports: [
    NgForOf,
    NgIf,
    RouterLink,
  ],
  templateUrl: './homepage.component.html',
  styleUrl: './homepage.component.css'
})
export class HomepageComponent implements OnInit {

  homePageProjects: HomepageProjectModel[] = [];
  imageIndex: number = 0;
  numberOfImages: number = 0;
  currentLang: Language = 'hu';

  //gallery
  isGalleryOpen: boolean = false;
  galleryIndex: number = 0;

  //gallery animation
  isFadingOut = false;
  isFadingIn = false;
  fadeDuration = 400; // ms

  //animation
  isAnimating: boolean = false;
  loopedProjects: HomepageProjectModel[] = [];
  intervalId: any;
  isPaused: boolean = false;

  constructor(private languageService: LanguageService,
              private projectLoader: ProjectLoaderService) {
  }

  ngOnInit(): void {
    this.languageService.language$.subscribe(lang => {
      this.currentLang = lang;
    });

    const homeProjects = this.projectLoader.getHomepageProjects();

    this.preloadImages(homeProjects.map(p => p.image)).then(() => {
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
    });
  }

  async preloadImages(urls: string[]): Promise<void> {
    await Promise.all(
      urls.map(
        src => new Promise<void>(resolve => {
          const img = new Image();
          img.src = src;
          img.onload = () => resolve();
          img.onerror = () => resolve();
        })
      )
    );
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


  protected openGallery(index: number) {
    this.isGalleryOpen = true;
    this.galleryIndex = index;
    this.isPaused = true;
  }

  protected previousGalleryProject() {
    if (!this.isGalleryOpen || this.isAnimating) return;
    this.isAnimating = true;

    this.isFadingOut = true;

    setTimeout(() => {
      this.galleryIndex =
        this.galleryIndex === 0 ? this.homePageProjects.length - 1 : this.galleryIndex - 1;

      this.isFadingOut = false;
      this.isFadingIn = true;

      setTimeout(() => {
        this.isFadingIn = false;
        this.isAnimating = false;
      }, this.fadeDuration);
    }, this.fadeDuration);
  }

  protected nextGalleryProject() {
    if (!this.isGalleryOpen || this.isAnimating) return;
    this.isAnimating = true;
    this.isFadingOut = true;

    setTimeout(() => {
      // switch image after fade-out
      this.galleryIndex =
        this.galleryIndex === this.homePageProjects.length - 1 ? 0 : this.galleryIndex + 1;

      this.isFadingOut = false;
      this.isFadingIn = true;

      setTimeout(() => {
        this.isFadingIn = false;
        this.isAnimating = false;
      }, this.fadeDuration);
    }, this.fadeDuration);
  }

  protected closeGallery() {
    this.isGalleryOpen = false;
    this.isPaused = false;
  }
}
