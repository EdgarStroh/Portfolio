import { Component, ElementRef, HostListener, Renderer2, AfterViewInit, Inject, PLATFORM_ID } from '@angular/core';
import { CommonModule, isPlatformBrowser } from '@angular/common';
import { LanguageService } from '../../language.service';

@Component({
  selector: 'app-skills',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.scss'],
})
export class SkillsComponent implements AfterViewInit {
  stickerImage: string = '/assets/img/skills/sticker.png';
  private isOpen: boolean = false;
  private animated = false; 
  isVisible = false;

  constructor(
    public langService: LanguageService,
    private el: ElementRef,
    private renderer: Renderer2,
    @Inject(PLATFORM_ID) private platformId: Object
  ) {}

  toggleLanguage() {
    this.langService.toggleLanguage();
  }

  onStickerClick(): void {
    if (!this.isOpen) {
      this.stickerImage = '/assets/img/skills/sticker2.png';
      setTimeout(() => {
        this.stickerImage = '/assets/img/skills/sticker-open.png';
        this.isOpen = true;
      }, 10);
    } else {
      this.stickerImage = '/assets/img/skills/sticker.png';
      this.isOpen = false;
    }
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
      }, 0);
    }
  }

  private checkVisibility() {
    if (!isPlatformBrowser(this.platformId)) return;

    const rect = this.el.nativeElement.getBoundingClientRect();
    const windowHeight = window.innerHeight;

    if (rect.top < windowHeight * 0.85) {
      this.isVisible = true;
      this.animateIn();
    }
  }

  private animateIn() {
    if (this.animated) return;  
    const container = this.el.nativeElement.querySelector('.img-bg');
    if (container) {
      this.renderer.setStyle(container, 'opacity', '1');
      this.renderer.setStyle(container, 'transform', 'translateY(0)');
      this.renderer.setStyle(container, 'transition', 'opacity 1s ease-out, transform 1s ease-out');
      this.animated = true;
    }
  }
}
