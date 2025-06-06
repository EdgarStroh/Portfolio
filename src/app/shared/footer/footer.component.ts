import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { LanguageService } from '../../language.service';
@Component({
  selector: 'app-footer',
  imports: [CommonModule, RouterModule],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss'
})
export class FooterComponent {
  
  constructor(public langService: LanguageService) { }

  hasHovered: boolean[] = [false, false, false];
  isReversing: boolean[] = [false, false, false];

  onMouseEnter(index: number) {
    this.hasHovered[index] = true;
    this.isReversing[index] = false;
  }

  onMouseLeave(index: number) {
    if (this.hasHovered[index]) {
      this.isReversing[index] = true;
      this.hasHovered[index] = false;
    }
  }
}
