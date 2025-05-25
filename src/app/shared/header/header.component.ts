import { Component, ChangeDetectorRef, OnInit, HostListener } from '@angular/core';
import { CommonModule } from '@angular/common'; // Für ngClass, ngIf etc.
import { LanguageService } from '../../language.service';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  isEnglish: boolean = true;
  isMenuOpen: boolean = false;
  isVisible: boolean = true; // für Header Sichtbarkeit beim Scrollen
  lastScrollTop = 0;

  constructor(public langService: LanguageService, private cdr: ChangeDetectorRef) {}

  ngOnInit(): void {
    const savedLang = localStorage.getItem('language') || 'en';
    this.isEnglish = savedLang === 'en';
    this.langService.setLanguage(savedLang);
  }

  toggleLanguage(): void {
    this.isEnglish = !this.isEnglish;
    const newLang = this.isEnglish ? 'en' : 'de';
    this.langService.setLanguage(newLang);
    localStorage.setItem('language', newLang);
    this.cdr.detectChanges();
  }

  toggleMenu(): void {
    this.isMenuOpen = !this.isMenuOpen;
  }

  get burgerIcon(): string {
    return this.isMenuOpen
      ? '/assets/img/header/responsive/icons/close.png'
      : '/assets/img/header/responsive/icons/menu.png';
  }

  get burgerAlt(): string {
    return this.isMenuOpen ? 'Close menu' : 'Open menu';
  }

  @HostListener('window:scroll', [])
  onWindowScroll() {
    const st = window.pageYOffset || document.documentElement.scrollTop;
    if (st > this.lastScrollTop) {
      // Runterscrollen → Header verstecken
      this.isVisible = false;
    } else {
      // Hochscrollen → Header zeigen
      this.isVisible = true;
    }
    this.lastScrollTop = st <= 0 ? 0 : st;
  }
}
