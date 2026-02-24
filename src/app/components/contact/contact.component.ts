import {Component, OnInit} from '@angular/core';
import {Language, LanguageService} from '../../services/language.service';
import {ContactModel} from '../../models/contact-model';
import {CONTACT_DATA} from '../../data/contact-data';
import {imageMap} from '../../image-map';
import {NgIf} from '@angular/common';

@Component({
  selector: 'app-contact',
  imports: [
    NgIf
  ],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css'
})
export class ContactComponent implements OnInit {

  currentLang: Language = 'hu';
  backgroundURL: string = '';
  mainEmail = '4pluszkft@gmail.com'
  isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);

  constructor(private languageService: LanguageService) {
  }

  ngOnInit(): void {
    this.languageService.language$.subscribe(lang => {
      this.currentLang = lang;
    })

    this.backgroundURL = imageMap['raday-house'].find(image => image.includes('05'))!
  }

  contactData: ContactModel = CONTACT_DATA;

  protected openMaps() {
    const url = 'https://www.google.com/maps/dir//4+Plusz+Kft.,+Budapest,+Bart%C3%B3k+B%C3%A9la+%C3%BAt+18,+1111/@47.4814979,19.0527283,15z/data=!4m8!4m7!1m0!1m5!1m1!1s0x4741ddb65e482c5d:0x93de8965a16efc54!2m2!1d19.0527283!2d47.4814979?entry=ttu&g_ep=EgoyMDI2MDIxMS4wIKXMDSoASAFQAw%3D%3D'
    window.open(url, '_blank');
  }

  openEmail(event: Event) {
    event.preventDefault();

    const gmailLink = `https://mail.google.com/mail/?view=cm&fs=1&to=${encodeURIComponent(this.mainEmail)}`;

    if (this.isMobile) {
      window.location.href = `mailto:${this.mainEmail}`;
      return;
    }

    let appOpened = false;

    const markOpened = () => {
      appOpened = true;
      cleanup();
    };

    const cleanup = () => {
      document.removeEventListener('visibilitychange', onVisibilityChange);
      window.removeEventListener('blur', onBlur);
      window.removeEventListener('pagehide', onPageHide);
    };

    const onVisibilityChange = () => { if (document.hidden) markOpened(); };
    const onBlur = () => markOpened();
    const onPageHide = () => markOpened();

    document.addEventListener('visibilitychange', onVisibilityChange);
    window.addEventListener('blur', onBlur);
    window.addEventListener('pagehide', onPageHide);

    setTimeout(() => {
      if (!appOpened) {
        cleanup();
        window.open(gmailLink, '_blank');
      }
    }, 600);
  }
}
