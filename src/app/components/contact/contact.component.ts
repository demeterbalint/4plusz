import {Component, OnInit} from '@angular/core';
import {Language, LanguageService} from '../../services/language.service';
import {ContactModel} from '../../models/contact-model';
import {CONTACT_DATA} from '../../data/contact-data';

/*declare let L: any;*/

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

  /* minimal map
  ngAfterViewInit(): void {
    const map = L.map('map', {
      center: [47.4815047, 19.0526600], // your coordinates
      zoom: 15,
      zoomControl: true, // zoom buttons
      attributionControl: false // removes OSM text
    });

    L.tileLayer(
      'https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png',
      {
        subdomains: 'abcd',
        maxZoom: 20
      }
    ).addTo(map);

    L.marker([47.4815047, 19.0526600]).addTo(map);
  }*/

  ngOnInit(): void {
    this.languageService.language$.subscribe(lang => {
      this.currentLang = lang;
    })
  }

  contactData: ContactModel = CONTACT_DATA;

}
