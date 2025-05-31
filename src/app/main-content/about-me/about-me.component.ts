import { Component, HostListener, ElementRef, AfterViewInit, Inject, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';  
import { LanguageService } from '../../language.service';

@Component({
  selector: 'app-about-me',
  standalone: true,
  templateUrl: './about-me.component.html',
  styleUrls: ['./about-me.component.scss']
})
export class AboutMeComponent implements AfterViewInit {
  isVisible = false;

  constructor(
    public langService: LanguageService, 
    private el: ElementRef,
    @Inject(PLATFORM_ID) private platformId: Object 
  ) {}

  toggleLanguage() {
    this.langService.toggleLanguage();
  }

  @HostListener('window:scroll', [])
  onWindowScroll() {
    if (isPlatformBrowser(this.platformId)) {  
      this.checkVisibility();
    }
  }

  ngAfterViewInit() {
    if (isPlatformBrowser(this.platformId)) { 
      setTimeout(() => {
        this.checkVisibility();
      });
    }
  }

  private checkVisibility() {
    if (!isPlatformBrowser(this.platformId)) return;  

    const rect = this.el.nativeElement.getBoundingClientRect();
    const windowHeight = window.innerHeight;

    if (rect.top < windowHeight * 0.85) {
      this.isVisible = true;
    }
  }
}
