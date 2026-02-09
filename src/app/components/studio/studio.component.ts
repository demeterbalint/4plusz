import {Component, OnInit} from '@angular/core';
import {Language, LanguageService} from '../../services/language.service';
import {StudioModel} from '../../models/studio-model';
import {STUDIO_DATA} from '../../data/studio-data';
import {NgForOf} from '@angular/common';
import {RouterLink} from '@angular/router';

@Component({
  selector: 'app-studio',
  imports: [
    NgForOf,
    RouterLink
  ],
  templateUrl: './studio.component.html',
  styleUrl: './studio.component.css'
})
export class StudioComponent implements OnInit {
  currentLang: Language = 'hu';
  studio: StudioModel = STUDIO_DATA;

  constructor(public languageService: LanguageService) {}

  ngOnInit(): void {
      this.languageService.language$.subscribe(lang => {
        this.currentLang = lang;
      })
  }

}
