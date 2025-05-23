import { Component, HostListener, ElementRef, AfterViewInit } from '@angular/core';
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

  constructor(public langService: LanguageService, private el: ElementRef) {}

  @HostListener('window:scroll', [])
  onWindowScroll() {
    this.checkVisibility();
  }

  ngAfterViewInit() {
    this.checkVisibility();
  }

  private checkVisibility() {
    const section = this.el.nativeElement.querySelector('section.max-width-1440');
    if (!section) return;
    const rect = section.getBoundingClientRect();
    const windowHeight = window.innerHeight;
    if (rect.top < windowHeight * 0.8) {
      this.isVisible = true;
    }
  }
}
