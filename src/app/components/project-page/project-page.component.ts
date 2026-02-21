import {Component, OnInit} from '@angular/core';
import {ProjectModel} from '../../models/project-model';
import {ProjectLoaderService} from '../../services/project-loader.service';
import {Language, LanguageService} from '../../services/language.service';
import {ActivatedRoute} from '@angular/router';
import {NgForOf, NgIf} from '@angular/common';
import {ScrollLockService} from '../../services/scroll-lock.service';

@Component({
  selector: 'app-project-page',
  imports: [
    NgIf,
    NgForOf
  ],
  templateUrl: './project-page.component.html',
  styleUrl: './project-page.component.css'
})
export class ProjectPageComponent implements OnInit {

  project!: ProjectModel;
  currentLang: Language = 'hu';
  mainImage!: string;
  projectImages: string[] = [];
  archName!: {
    hu: string,
    en: string
  }
  photoName!: {
    hu: string,
    en: string
  }
  isGalleryOpen: boolean = false;
  galleryIndex: number = 0;

  constructor(private projectLoader: ProjectLoaderService,
              private languageService: LanguageService,
              private route: ActivatedRoute,
              private scrrollLockService: ScrollLockService) {
  }

  ngOnInit(): void {
    this.languageService.language$.subscribe(language => {
      this.currentLang = language;
    })

    this.archName = {
      hu: 'Tervezők: ',
      en: 'Architects: ',
    };

    this.photoName = {
      hu: 'Fotók: ',
      en: 'Photos by: ',
    };

    this.route.params.subscribe(params => {
      const slug = params['slug'];

      if (!slug) return;

      this.project = this.projectLoader.getProjectBySlug(slug)!;
    })

    this.mainImage = this.projectLoader.getMainImage(this.project);
    const regex = /.*\d{2}.*/;
    this.projectImages = this.project.images.filter(image => regex.test(image))
  }

  protected openGallery(index: number) {
    this.isGalleryOpen = true;
    this.galleryIndex = index;
    this.scrrollLockService.lock();
  }

  protected previousGalleryProject() {
    if (this.galleryIndex == 0) {
      this.galleryIndex = this.projectImages.length - 1;
    } else {
      this.galleryIndex--;
    }
  }

  protected nextGalleryProject() {
    if (this.galleryIndex == this.projectImages.length - 1) {
      this.galleryIndex = 0;
    } else {
      this.galleryIndex++;
    }
  }

  protected closeGallery() {
    this.isGalleryOpen = false;
    this.scrrollLockService.unlock();
  }
}
