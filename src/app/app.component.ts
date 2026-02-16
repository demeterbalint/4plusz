import {Component, OnInit} from '@angular/core';
import {Router, RouterLink, RouterLinkActive, RouterOutlet} from '@angular/router';
import {Language, LanguageService} from './services/language.service';
import {NavbarFooterTextModel} from './models/navbar-footer-text-model';
import {NAVBAR_FOOTER_TEXT} from './data/navbar-footer-text-data';
import {NgForOf} from '@angular/common';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, RouterLink, RouterLinkActive, NgForOf],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit {
  title = 'negyplusz';

  currentLang: Language = 'hu';
  projectTypes = {
    hu: [
      { name: 'Középületek', route: 'public-buildings' },
      { name: 'Szakrális épületek', route: 'religious-buildings' },
      { name: 'Lakóépületek', route: 'residential-buildings' },
      { name: 'Műemlékek', route: 'historical-buildings' },
      { name: 'Tervek', route: 'conceptual-buildings' },
      { name: 'Referenciák', route: 'reference-works' }
    ],
    en: [
      { name: 'Public buildings', route: 'public-buildings' },
      { name: 'Religious buildings', route: 'religious-buildings' },
      { name: 'Residential buildings', route: 'residential-buildings' },
      { name: 'Historical buildings', route: 'historical-buildings' },
      { name: 'Conceptual designs', route: 'conceptual-buildings' },
      { name: 'Reference works', route: 'reference-works' }
    ]
  }

  constructor(private router: Router,
              private languageService: LanguageService) {
  }

  ngOnInit(): void {
    this.languageService.language$.subscribe(lang => {
      this.currentLang = lang;
    })
  }

  navFooText: NavbarFooterTextModel =  NAVBAR_FOOTER_TEXT;

  switchToEnglish() {
    this.languageService.setLanguage('en');
  }

  switchToHungarian() {
    this.languageService.setLanguage('hu');
  }

  protected openMaps() {
    const url = 'https://www.google.com/maps/dir//4+Plusz+Kft.,+Budapest,+Bart%C3%B3k+B%C3%A9la+%C3%BAt+18,+1111/@47.4814979,19.0527283,15z/data=!4m8!4m7!1m0!1m5!1m1!1s0x4741ddb65e482c5d:0x93de8965a16efc54!2m2!1d19.0527283!2d47.4814979?entry=ttu&g_ep=EgoyMDI2MDIxMS4wIKXMDSoASAFQAw%3D%3D'
    window.open(url, '_blank');
  }
}
