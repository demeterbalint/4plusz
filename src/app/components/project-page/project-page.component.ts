import {Component, OnInit} from '@angular/core';
import {ProjectModel} from '../../models/project-model';
import {ProjectLoaderService} from '../../services/project-loader.service';
import {Language, LanguageService} from '../../services/language.service';
import {ActivatedRoute} from '@angular/router';
import {NgForOf, NgIf} from '@angular/common';
// import imagesLoaded from 'imagesloaded';
// import Packery from 'packery';

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

  constructor(private projectLoader: ProjectLoaderService,
              private languageService: LanguageService,
              private route: ActivatedRoute) {
  }

  /*ngAfterViewInit(): void {
    const grid = document.querySelector('.pp-image-grid') as HTMLElement | null;
    if (!grid) return;
    imagesLoaded(grid, () => {
      imagesLoaded(grid, () => {
        new Packery(grid, {
          itemSelector: '.pp-image-grid-item',
          gutter: 6,
          percentPosition: true
        });
      });
    });
  }*/

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

}
