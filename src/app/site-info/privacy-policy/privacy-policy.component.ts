import { Component } from '@angular/core';
import { HeaderComponent } from "../../shared/header/header.component";
import { LanguageService } from '../../language.service';
import { FooterComponent } from "../../shared/footer/footer.component";
@Component({
  selector: 'app-privacy-policy',
  imports: [HeaderComponent, FooterComponent],
  templateUrl: './privacy-policy.component.html',
  styleUrl: './privacy-policy.component.scss'
})
export class PrivacyPolicyComponent {
  constructor(public langService: LanguageService) { }
  
}
