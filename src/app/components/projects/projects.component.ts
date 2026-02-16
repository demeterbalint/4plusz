import {Component, OnInit} from '@angular/core';
import {Language, LanguageService} from '../../services/language.service';
import {ProjectLoaderService} from '../../services/project-loader.service';
import {ProjectModel} from '../../models/project-model';
import {ProjectService} from '../../services/project.service';
import {NgForOf} from '@angular/common';
import {RouterLink} from '@angular/router';

@Component({
  selector: 'app-projects',
  imports: [
    NgForOf,
    RouterLink
  ],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.css'
})
export class ProjectsComponent implements OnInit {

  currentLang: Language = 'hu';
  projects: ProjectModel[] = [];

  constructor(private languageService: LanguageService,
              private projectService: ProjectService) {
  }

  ngOnInit(): void {
    this.languageService.language$.subscribe(lang => {
      this.currentLang = lang;
    })

    this.projects = this.projectService.getProjects()
  }

  getGridImage(project: ProjectModel) {
    return project.images.find(img => img.includes('grid'))!
  }
}
