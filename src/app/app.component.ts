import {Component, OnInit} from '@angular/core';
import {Router, RouterLink, RouterLinkActive, RouterOutlet} from '@angular/router';
import {Language, LanguageService} from './services/language.service';
import {NavbarContactText} from './interfaces/navbarContactText';

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

  navcontext: NavbarContactText = {
    //header names
    headerBrand: { hu: '4 PLUSZ ÉPÍTÉSZ STÚDIÓ', en: '4 PLUSZ ARCHITECT STUDIO' },
    home: { hu: 'Kezdőlap', en: 'Home' },
    studio: { hu: 'Stúdió', en: 'Studio' },
    projects: { hu: 'Projektek', en: 'Projects' },
    publications: { hu: 'Publikációk', en: 'Publications' },
    contact: { hu: 'Kapcsolat', en: 'Contact' },

    //footer names
    footerBrand: { hu: '4plusz Építész Stúdió', en: '4plusz Architect Studio' },
    phone: { hu: '+36 20 982 6352', en: '+36 20 982 6352' },
    address: { hu: '1111 Budapest Bartók Béla út 18', en: '1111 Budapest Bartók Béla street 18' }
  }

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
