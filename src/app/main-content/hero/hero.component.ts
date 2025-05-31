import { Component, AfterViewInit, Inject, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { CommonModule } from '@angular/common';
import { LanguageService } from '../../language.service';

@Component({
  selector: 'app-hero',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.scss']
})
export class HeroComponent implements AfterViewInit {
  hasHovered = false;
  isReversing = false;
  isMobile = false;
  isVisible = false;

  constructor(
    public langService: LanguageService,
    @Inject(PLATFORM_ID) private platformId: Object
  ) {}

  get defaultText(): string {
    return this.langService.translationsMap.hero.defaultText;
  }

  get hoverText(): string {
    return this.langService.translationsMap.hero.hoverText;
  }

  get buttonText(): string {
    if (this.hasHovered && !this.isReversing) {
      return this.hoverText;
    } else {
      return this.defaultText;
    }
  }

  onMouseEnter() {
    this.hasHovered = true;
    this.isReversing = false;
  }

  onMouseLeave() {
    if (this.hasHovered) {
      this.isReversing = true;
    }
  }

  ngAfterViewInit() {
    if (isPlatformBrowser(this.platformId)) {
      if (window.innerWidth <= 600) {
        setTimeout(() => {
          this.isMobile = true;
          this.hasHovered = true;
          this.isReversing = false;
        }, 1000);
      }
      setTimeout(() => {
        this.isVisible = true;
      }, 100);
    }
  }
}
