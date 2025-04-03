import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-footer',
  imports: [CommonModule],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss'
})
export class FooterComponent {
  hasHovered: boolean[] = [false, false, false]; 

  onMouseEnter(index: number) {
    this.hasHovered[index] = true;
  }

  onMouseLeave(index: number) {
    this.hasHovered[index] = false;
  }


  // hasHovered = false;
  // isReversing = false;

  // onMouseEnter() {
  //   this.hasHovered = true;
  //   this.isReversing = false;
  // }

  // onMouseLeave() {
  //   if (this.hasHovered) {
  //     this.isReversing = true;
  //   }
  // }
}
