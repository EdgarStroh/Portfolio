import { Component } from '@angular/core';
import { ChangeDetectorRef } from '@angular/core';
import { LanguageService } from '../../language.service';
@Component({
  selector: 'app-header',
  imports: [],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {
  constructor(public langService: LanguageService, private cdr: ChangeDetectorRef) { }

  isEnglish: boolean = true;
  isMenuOpen: boolean = false;

  toggleLanguage() {
    this.langService.toggleLanguage();
    this.isEnglish = this.langService.isEnglish;
    this.cdr.detectChanges(); // erzwingt das Neurendern
  }


  toggleMenu() {
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
    return this.isMenuOpen ? '/assets/img/header/responsive/icons/close.png' : '/assets/img/header/responsive/icons/menu.png';
  }

  // get burgerAlt(): string {
  //   return this.isMenuOpen ? 'Close menu' : 'Open menu';
  // }

}
