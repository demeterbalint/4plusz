import {Component, OnInit} from '@angular/core';
import {RouterLink, RouterLinkActive, RouterOutlet} from '@angular/router';
import {NgClass} from '@angular/common';
import {HomepageComponent} from './components/homepage/homepage.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, RouterLink, RouterLinkActive],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit {

  ngOnInit(): void {
    this.languageToHu();
  }

  title = 'negyplusz';
  isEnglish: boolean = false;

  homeMain: string = '';
  home: string = '';
  studio: string = '';
  projects: string = '';
  publications: string = '';
  contact: string = '';

  languageToHu() {
    this.isEnglish = false;
    this.homeMain = '4 PLUSZ ÉPÍTÉSZ STÚDIÓ';
    this.home = 'Kezdőlap';
    this.studio = 'Stúdió';
    this.projects = 'Projektek';
    this.publications = 'Publikációk';
    this.contact = 'Kapcsolat';
  }

  languageToEn() {
    this.isEnglish = true;
    this.homeMain = '4 PLUSZ ARCHITECT STUDIO';
    this.home = 'Home';
    this.studio = 'Studio';
    this.projects = 'Projects';
    this.publications = 'Publications';
    this.contact = 'Contact';
  }
}
