import { Injectable } from '@angular/core';
import {BehaviorSubject} from 'rxjs';

export type Language = 'en' | 'hu';

@Injectable({
  providedIn: 'root'
})
export class LanguageService {

  private languageSubject = new BehaviorSubject<Language>('hu');
  language$ = this.languageSubject.asObservable();

  constructor() {
    const saved = localStorage.getItem('lang') as Language | null;
    if (saved === 'en' || saved === 'hu') {
      this.languageSubject.next(saved)
    }
  }

  setLanguage(lang: Language) {
    localStorage.setItem('lang', lang);
    this.languageSubject.next(lang);
  }

  getCurrentLanguage(): Language {
    return this.languageSubject.value;
  }
}
