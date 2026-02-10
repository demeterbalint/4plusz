import {Component, OnInit} from '@angular/core';
import {Language, LanguageService} from '../../services/language.service';
import {PublicationModel} from '../../models/publication--model';
import {PUBLICATIONS_DATA} from '../../data/publications-data';
import {NgForOf} from '@angular/common';

@Component({
  selector: 'app-publications',
  imports: [
    NgForOf
  ],
  templateUrl: './publications.component.html',
  styleUrl: './publications.component.css'
})
export class PublicationsComponent implements OnInit {

  currentLang: Language = 'hu';
  publicationsData: PublicationModel[] = PUBLICATIONS_DATA;
  title: any = {
    hu: 'Sajtó megjelenések',
    en: 'Press appearances'
  }

  subtitle: any = {
    hu: 'Az alábbi felsorolásban építészeti szaklapok kritikái olvashatóak munkáinkról.',
    en: 'The list below includes reviews of our work from architectural journals.'
  }

  constructor(private languageService: LanguageService) {
  }

  ngOnInit(): void {
    this.languageService.language$.subscribe(lang => {
      this.currentLang = lang;
    })
  }

}
