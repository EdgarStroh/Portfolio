import { Component, HostListener, ElementRef, AfterViewInit } from '@angular/core';
import { LanguageService } from '../../language.service';

@Component({
  selector: 'app-about-me',
  standalone: true,
  templateUrl: './about-me.component.html',
  styleUrls: ['./about-me.component.scss']
})
export class AboutMeComponent implements AfterViewInit {
  isVisible = false;

  constructor(public langService: LanguageService, private el: ElementRef) {}

  toggleLanguage() {
    this.langService.toggleLanguage();
  }

  @HostListener('window:scroll', [])
  onWindowScroll() {
    this.checkVisibility();
  }

 ngAfterViewInit() {
  setTimeout(() => {
    this.checkVisibility();
  });
}

  private checkVisibility() {
    const rect = this.el.nativeElement.getBoundingClientRect();
    const windowHeight = window.innerHeight;
    if (rect.top < windowHeight * 0.85) {
      this.isVisible = true;
    }
  }
}
