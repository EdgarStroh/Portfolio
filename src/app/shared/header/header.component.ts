import { Component, OnInit, Inject, PLATFORM_ID, ChangeDetectorRef, HostListener } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { CommonModule } from '@angular/common';
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
  isVisible: boolean = true;
  lastScrollTop = 0;

  constructor(
    public langService: LanguageService,
    private cdr: ChangeDetectorRef,
    @Inject(PLATFORM_ID) private platformId: Object
  ) { }

  ngOnInit(): void {
    if (isPlatformBrowser(this.platformId)) {
      const savedLang = localStorage.getItem('language') || 'en';
      this.isEnglish = savedLang === 'en';
      this.langService.setLanguage(savedLang);
    }
  }

  toggleLanguage(): void {
    this.isEnglish = !this.isEnglish;
    const newLang = this.isEnglish ? 'en' : 'de';
    this.langService.setLanguage(newLang);

    if (isPlatformBrowser(this.platformId)) {
      localStorage.setItem('language', newLang);
    }

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
    if (!isPlatformBrowser(this.platformId)) {
      return;
    }

    const st = window.pageYOffset || document.documentElement.scrollTop;
    this.isVisible = st <= this.lastScrollTop;
    this.lastScrollTop = st <= 0 ? 0 : st;
  }
}
