import { Component, HostListener, ElementRef, AfterViewInit } from '@angular/core';
import { LanguageService } from '../../language.service';

@Component({
  selector: 'app-testimonials',
  standalone: true,
  templateUrl: './testimonials.component.html',
  styleUrls: ['./testimonials.component.scss']
})
export class TestimonialsComponent implements AfterViewInit {
  isVisible = false;

  constructor(public langService: LanguageService, private el: ElementRef) {}

  @HostListener('window:scroll', [])
  onWindowScroll() {
    this.checkVisibility();
  }

  ngAfterViewInit() {
    this.checkVisibility();
  }

  private checkVisibility() {
    const rect = this.el.nativeElement.getBoundingClientRect();
    const windowHeight = window.innerHeight;
    if (rect.top < windowHeight * 0.85) {
      this.isVisible = true;
    }
  }
}
