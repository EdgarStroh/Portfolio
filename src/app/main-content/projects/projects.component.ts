import { Component, HostListener, ElementRef, AfterViewInit } from '@angular/core';
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
