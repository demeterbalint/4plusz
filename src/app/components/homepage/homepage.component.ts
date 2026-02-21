import {Component, OnInit} from '@angular/core';
import {NgForOf, NgIf} from '@angular/common';
import {Language, LanguageService} from '../../services/language.service';
import {HomepageProjectModel} from '../../models/homepage-project-model';
import {ProjectLoaderService} from '../../services/project-loader.service';
import {RouterLink} from '@angular/router';
import {ScrollLockService} from '../../services/scroll-lock.service';

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
  fadeDuration = 600; // ms
  currentGalleryIndex = 0; // what is currently shown
  isFadingOut = false;
  isFadingIn = false;
  isGalleryAnimating = false;

  //animation
  isAnimating: boolean = false;
  loopedProjects: HomepageProjectModel[] = [];
  intervalId: any;
  isPaused: boolean = false;

  constructor(private languageService: LanguageService,
              private projectLoader: ProjectLoaderService,
              private scrollLockService: ScrollLockService) {
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

  preloadImagesAround() {
    if (this.numberOfImages === 0) return;

    const realIndex = this.displayIndex - 1; // convert displayIndex to 0-based

    const prevIndex =
      realIndex === 0 ? this.homePageProjects.length - 1 : realIndex - 1;

    const nextIndex =
      realIndex === this.homePageProjects.length - 1 ? 0 : realIndex + 1;

    const candidates = [
      this.homePageProjects[realIndex],
      this.homePageProjects[nextIndex],
      this.homePageProjects[prevIndex],
    ];

    candidates.forEach(p => {
      const img = new Image();
      img.src = p.image;
    });
  }

  startAutoSlide() {
    this.intervalId = setInterval(() => {
      if (!this.isPaused) {
        this.nextProject();
      }
    }, 5000);
  }

  nextProject() {
    if (this.isAnimating || this.numberOfImages == 0) return;

    this.isAnimating = true;
    this.imageIndex++;

    this.preloadImagesAround();
  }

  previousProject() {
    if (this.isAnimating || this.numberOfImages == 0) return;

    this.isAnimating = true;
    this.imageIndex--;

    this.preloadImagesAround();
  }

  onTransitionEnd() {
    if (!this.isAnimating) return;

    this.isAnimating = false;

    // Handle loop jump
    if (this.imageIndex === this.loopedProjects.length - 1) {
      this.imageIndex = 1;
    } else if (this.imageIndex === 0) {
      this.imageIndex = this.loopedProjects.length - 2;
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
    this.currentGalleryIndex = index;
    this.isPaused = true;
    this.isFadingOut = false;
    this.isFadingIn = false;
    this.isGalleryAnimating = false;
    this.scrollLockService.lock();
  }

  nextGalleryProject() {
    if (this.isGalleryAnimating) return;
    this.isGalleryAnimating = true;

    const nextIndex = (this.currentGalleryIndex + 1) % this.homePageProjects.length;

    // Phase 1: Fade out current
    this.isFadingOut = true;
    this.isFadingIn = false;

    setTimeout(() => {
      // Phase 2: Switch image and start fade in
      this.currentGalleryIndex = nextIndex;
      this.isFadingOut = false;
      this.isFadingIn = false; // Reset to 0 before fading in

      requestAnimationFrame(() => {
        requestAnimationFrame(() => {
          this.isFadingIn = true;

          setTimeout(() => {
            // Phase 3: Animation complete
            this.isFadingIn = false;
            this.isGalleryAnimating = false;
          }, this.fadeDuration);
        });
      });
    }, this.fadeDuration);
  }

  previousGalleryProject() {
    if (this.isGalleryAnimating) return;
    this.isGalleryAnimating = true;

    const nextIndex = this.currentGalleryIndex === 0
      ? this.homePageProjects.length - 1
      : this.currentGalleryIndex - 1;

    // Phase 1: Fade out current
    this.isFadingOut = true;
    this.isFadingIn = false;

    setTimeout(() => {
      // Phase 2: Switch image and start fade in
      this.currentGalleryIndex = nextIndex;
      this.isFadingOut = false;
      this.isFadingIn = false; // Reset to 0 before fading in

      requestAnimationFrame(() => {
        requestAnimationFrame(() => {
          this.isFadingIn = true;

          setTimeout(() => {
            // Phase 3: Animation complete
            this.isFadingIn = false;
            this.isGalleryAnimating = false;
          }, this.fadeDuration);
        });
      });
    }, this.fadeDuration);
  }

  protected closeGallery() {
    this.isGalleryOpen = false;
    this.isPaused = false;
    this.scrollLockService.unlock();
  }

  /* touch handling on gallery */
  pointerStartX = 0;
  pointerCurrentX = 0;
  isSwiping = false;
  minSwipeDistance = 50; // px threshold to trigger next/prev

  onWheel(event: WheelEvent) {
    if (Math.abs(event.deltaX) > 20) { // threshold
      if (event.deltaX > 0) {
        this.nextGalleryProject();
      } else {
        this.previousGalleryProject();
      }
    }
  }

  onPointerDown(event: PointerEvent) {
    if (this.isAnimating) return;

    // Track only touch/mouse for swipe
    if (event.pointerType === 'mouse' || event.pointerType === 'touch') {
      this.isSwiping = true;
      this.pointerStartX = event.clientX;
      this.pointerCurrentX = this.pointerStartX;

      // Capture pointer to keep receiving move/up events outside element
      (event.target as HTMLElement).setPointerCapture(event.pointerId);
    }
  }

  onPointerMove(event: PointerEvent) {
    if (!this.isSwiping) return;
    this.pointerCurrentX = event.clientX;
  }

  onPointerUp(event: PointerEvent) {
    if (!this.isSwiping) return;
    this.isSwiping = false;

    const diff = this.pointerStartX - this.pointerCurrentX;

    if (Math.abs(diff) > this.minSwipeDistance) {
      if (diff > 0) {
        this.nextGalleryProject();
      } else {
        this.previousGalleryProject();
      }
    }
    (event.target as HTMLElement).releasePointerCapture(event.pointerId);
  }
}
