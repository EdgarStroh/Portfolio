import { Component, HostListener, ElementRef, AfterViewInit, Inject, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';  
import { FooterComponent } from "../../shared/footer/footer.component";
import { ContactformComponent } from "../../contactform/contactform.component";
import { LanguageService } from '../../language.service';

@Component({
  selector: 'app-contact',
  standalone: true,
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss'],
  imports: [FooterComponent, ContactformComponent]
})
export class ContactComponent implements AfterViewInit {
  isVisible = false;

  constructor(
    public langService: LanguageService, 
    private el: ElementRef,
    @Inject(PLATFORM_ID) private platformId: Object 
  ) {}

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

    const section = this.el.nativeElement.querySelector('section.max-width-1440');
    if (!section) return;

    const rect = section.getBoundingClientRect();
    const windowHeight = window.innerHeight;

    this.isVisible = rect.top < windowHeight * 0.8;
  }
}
