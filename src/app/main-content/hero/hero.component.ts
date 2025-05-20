import { Component, AfterViewInit } from '@angular/core';
import { HeaderComponent } from '../../shared/header/header.component';
import { CommonModule } from '@angular/common';
import { LanguageService } from '../../language.service';

@Component({
  selector: 'app-hero',
  standalone: true,
  imports: [HeaderComponent, CommonModule],
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.scss']
})
export class HeroComponent implements AfterViewInit {
  hasHovered = false;
  isReversing = false;
  isMobile = false;

  constructor(public langService: LanguageService) { }

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
    if (window.innerWidth <= 600) {
      setTimeout(() => {
        this.isMobile = true;
        this.hasHovered = true;
        this.isReversing = false;
      }, 1000);
    }
  }
}
