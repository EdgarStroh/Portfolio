import { Component } from '@angular/core';
import { HeaderComponent } from "../../shared/header/header.component";
import { LanguageService } from '../../language.service';
import { FooterComponent } from "../../shared/footer/footer.component";

@Component({
  selector: 'app-legal-notice',
  imports: [HeaderComponent, FooterComponent],
  templateUrl: './legal-notice.component.html',
  styleUrl: './legal-notice.component.scss'
})
export class LegalNoticeComponent {
  constructor(public langService: LanguageService) { }
}
