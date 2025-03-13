import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  imports: [],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {
  isEnglish: boolean = true;

  toggleLanguage() {
    this.isEnglish = !this.isEnglish;
  }
}
