import { Injectable } from '@angular/core';
import {BehaviorSubject} from 'rxjs';

export type Language = 'en' | 'hu';

@Injectable({
  providedIn: 'root'
})
export class LanguageService {

  constructor() { }

  private languageSubject = new BehaviorSubject<Language>('hu');
  language$ = this.languageSubject.asObservable();

  setLanguage(lang: Language) {
    this.languageSubject.next(lang);
  }

  getCurrentLanguage(): Language {
    return this.languageSubject.value;
  }
}
