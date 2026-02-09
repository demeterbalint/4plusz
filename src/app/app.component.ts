import {Component, OnInit} from '@angular/core';
import {Router, RouterLink, RouterLinkActive, RouterOutlet} from '@angular/router';
import {Language, LanguageService} from './services/language.service';
import {NavbarFooterTextModel} from './models/navbar-footer-text-model';
import {NAVBAR_FOOTER_TEXT} from './data/navbar-footer-text-data';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, RouterLink, RouterLinkActive],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit {
  title = 'negyplusz';

  currentLang: Language = 'hu';

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

  protected goToHome() {
    if (this.router.isActive('/', true)) {
      window.scrollTo({top: 0, left: 0, behavior: "smooth"});
    } else {
      this.router.navigate(['/']);
    }
  }
}
