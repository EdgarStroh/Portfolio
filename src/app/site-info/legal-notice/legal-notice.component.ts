import { Component } from '@angular/core';
import { HeaderComponent } from "../../shared/header/header.component";
import { LanguageService } from '../../language.service';

@Component({
  selector: 'app-legal-notice',
  imports: [HeaderComponent],
  templateUrl: './legal-notice.component.html',
  styleUrl: './legal-notice.component.scss'
})
export class LegalNoticeComponent {
  constructor(public langService: LanguageService) { }
}
