import { Component, HostListener, ElementRef, AfterViewInit, Inject, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { SingleprojectsComponent } from "./singleprojects/singleprojects.component";
import { LanguageService } from '../../language.service';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [SingleprojectsComponent],
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent implements AfterViewInit {
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
      }, 0);
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
