import {Component, OnInit} from '@angular/core';
import {Language, LanguageService} from '../../services/language.service';
import {ContactModel} from '../../models/contact-model';
import {CONTACT_DATA} from '../../data/contact-data';

@Component({
  selector: 'app-contact',
  imports: [],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css'
})
export class ContactComponent implements OnInit {

  currentLang: Language = 'hu';
  backgroundURL: string = '';

  constructor(private languageService: LanguageService) {
  }

  ngOnInit(): void {
    this.languageService.language$.subscribe(lang => {
      this.currentLang = lang;
    })
  }

  contactData: ContactModel = CONTACT_DATA;

}
