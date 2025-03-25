import { Component } from '@angular/core';
import { HeaderComponent } from '../../shared/header/header.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-hero',
  imports: [HeaderComponent, CommonModule],
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.scss'
})
export class HeroComponent {
  hasHovered = false;
  isReversing = false;

  onMouseEnter() {
    this.hasHovered = true;
    this.isReversing = false;
  }

  onMouseLeave() {
    if (this.hasHovered) {
      this.isReversing = true;
    }
  }
}