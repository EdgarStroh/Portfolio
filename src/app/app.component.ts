import { Component, AfterViewInit, Inject, PLATFORM_ID, ApplicationRef } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { isPlatformBrowser } from '@angular/common';
import { NgZone } from '@angular/core';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements AfterViewInit {
  constructor(
    private ngZone: NgZone,
    @Inject(PLATFORM_ID) private platformId: Object
  ) { }

  title = 'Edgar Stroh';

  private cursorDot!: HTMLElement;
  private cursorOutline!: HTMLElement;

  private mouseX = 0;
  private mouseY = 0;
  private outlineX = 0;
  private outlineY = 0;




  ngAfterViewInit(): void {
    if (!isPlatformBrowser(this.platformId)) {
      return;
    }

    this.cursorDot = document.querySelector('.cursor-dot')!;
    this.cursorOutline = document.querySelector('.cursor-outline')!;

    document.addEventListener('mousemove', (e) => {
      this.mouseX = e.clientX;
      this.mouseY = e.clientY;

      this.cursorDot.style.transform = `translate(${this.mouseX}px, ${this.mouseY}px)`;
    });

    this.ngZone.runOutsideAngular(() => {
      this.animateCursor();
    });
  }


  private animateCursor(): void {
    this.outlineX += (this.mouseX - this.outlineX) * 0.3;
    this.outlineY += (this.mouseY - this.outlineY) * 0.3;

    this.cursorOutline.style.transform = `translate(${this.outlineX - 14}px, ${this.outlineY - 14}px)`;

    requestAnimationFrame(() => this.animateCursor());
  }
}
