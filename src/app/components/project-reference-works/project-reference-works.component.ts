import {Component, OnInit} from '@angular/core';
import {PROJECT_REFERENCE_BASE_DATA} from '../../data/project-reference-base-data';
import {ProjectReferenceBaseModel} from '../../models/project-reference-base-model';
import {ProjectReferenceModel} from '../../models/project-reference-model';
import {PROJECT_REFERENCE_DATA} from '../../data/project-reference-data';
import {Language, LanguageService} from '../../services/language.service';
import {NgForOf} from '@angular/common';

@Component({
  selector: 'app-project-reference-works',
  imports: [
    NgForOf
  ],
  templateUrl: './project-reference-works.component.html',
  styleUrl: './project-reference-works.component.css'
})
export class ProjectReferenceWorksComponent implements OnInit {

  baseData: ProjectReferenceBaseModel = PROJECT_REFERENCE_BASE_DATA;
  tableData: ProjectReferenceModel[] = PROJECT_REFERENCE_DATA;
  currentLang: Language = 'hu';

  constructor(private languageService: LanguageService) {
  }

  ngOnInit(): void {
    this.languageService.language$.subscribe(lang => {
      this.currentLang = lang;
    })
  }

}
