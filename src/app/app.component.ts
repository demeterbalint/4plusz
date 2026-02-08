import {Component, OnInit} from '@angular/core';
import {Router, RouterLink, RouterLinkActive, RouterOutlet} from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, RouterLink, RouterLinkActive],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit {

  constructor(private router: Router) {
  }

  ngOnInit(): void {
    this.languageToHu();
  }

  title = 'negyplusz';
  isEnglish: boolean = false;

  //header names
  homeMain: string = '';
  home: string = '';
  studio: string = '';
  projects: string = '';
  publications: string = '';
  contact: string = '';

  //footer names
  name: string = '';
  phone: string = '+36 20 982 6352';
  address: string = '';

  languageToHu() {
    this.isEnglish = false;

    //header names
    this.homeMain = '4 PLUSZ ÉPÍTÉSZ STÚDIÓ';
    this.home = 'Kezdőlap';
    this.studio = 'Stúdió';
    this.projects = 'Projektek';
    this.publications = 'Publikációk';
    this.contact = 'Kapcsolat';

    //footer names
    this.name = '4plusz Építész Stúdió';
    this.address = '1111 Budapest Bartók Béla út 18'
  }

  languageToEn() {
    this.isEnglish = true;

    //header names
    this.homeMain = '4 PLUSZ ARCHITECT STUDIO';
    this.home = 'Home';
    this.studio = 'Studio';
    this.projects = 'Projects';
    this.publications = 'Publications';
    this.contact = 'Contact';

    //footer names
    this.name = '4plusz Architect Studio';
    this.address = '1111 Budapest Bartók Béla street 18'
  }

  protected goToHome() {
    if (this.router.isActive('/', true)) {
      window.scrollTo({top: 0, left: 0, behavior: "smooth"});
    } else {
      this.router.navigate(['/']);
    }
  }
}
