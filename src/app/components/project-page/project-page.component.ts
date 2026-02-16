import {Component, OnInit} from '@angular/core';
import {ProjectModel} from '../../models/project-model';
import {ProjectLoaderService} from '../../services/project-loader.service';
import {Language, LanguageService} from '../../services/language.service';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-project-page',
  imports: [],
  templateUrl: './project-page.component.html',
  styleUrl: './project-page.component.css'
})
export class ProjectPageComponent implements OnInit {

  project!: ProjectModel;
  currentLang: Language = 'hu';

  constructor(private projectLoader: ProjectLoaderService,
              private languageService: LanguageService,
              private route: ActivatedRoute) {
  }

  ngOnInit(): void {
    this.languageService.language$.subscribe(language => {
      this.currentLang = language;
    })

    this.route.params.subscribe(params => {
      const slug = params['slug'];

      if (!slug) return;

      this.project = this.projectLoader.getProjectBySlug(slug)!;
    })
  }

}
