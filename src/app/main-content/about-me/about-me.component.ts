import { Component } from '@angular/core';
import { LanguageService } from '../../language.service';

@Component({
  selector: 'app-about-me',
  standalone: true,
  templateUrl: './about-me.component.html',
  styleUrls: ['./about-me.component.scss']
})
export class AboutMeComponent {
  constructor(public langService: LanguageService) {}

  toggleLanguage() {
    this.langService.toggleLanguage();
  }
}
