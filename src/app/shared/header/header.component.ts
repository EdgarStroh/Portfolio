import { Component, OnInit } from '@angular/core';
import { ChangeDetectorRef } from '@angular/core';
import { LanguageService } from '../../language.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent implements OnInit {
  isEnglish: boolean = true;
  isMenuOpen: boolean = false;

  constructor(public langService: LanguageService, private cdr: ChangeDetectorRef) {}

  ngOnInit(): void {
    // Beim Laden Sprache aus localStorage holen
    const savedLang = localStorage.getItem('language') || 'en';
    this.isEnglish = savedLang === 'en';

    // Sprache im LanguageService setzen
    this.langService.setLanguage(savedLang);
  }

  toggleLanguage(): void {
    this.isEnglish = !this.isEnglish;
    const newLang = this.isEnglish ? 'en' : 'de';

    // im Service + localStorage speichern
    this.langService.setLanguage(newLang);
    localStorage.setItem('language', newLang);

    this.cdr.detectChanges();
  }

  toggleMenu(): void {
    this.isMenuOpen = !this.isMenuOpen;
    const icon = document.getElementById('burgerIcon') as HTMLImageElement;

    if (this.isMenuOpen) {
      icon.src = '/assets/img/header/responsive/icons/close.png';
      icon.alt = 'Close menu';
    } else {
      icon.src = '/assets/img/header/responsive/icons/menu.png';
      icon.alt = 'Open menu';
    }
  }

  get burgerIcon(): string {
    return this.isMenuOpen
      ? '/assets/img/header/responsive/icons/close.png'
      : '/assets/img/header/responsive/icons/menu.png';
  }
}
