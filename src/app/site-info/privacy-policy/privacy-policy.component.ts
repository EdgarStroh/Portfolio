import { Component } from '@angular/core';
import { HeaderComponent } from "../../shared/header/header.component";
import { LanguageService } from '../../language.service';

@Component({
  selector: 'app-privacy-policy',
  imports: [HeaderComponent],
  templateUrl: './privacy-policy.component.html',
  styleUrl: './privacy-policy.component.scss'
})
export class PrivacyPolicyComponent {
 constructor(public langService: LanguageService) { }
}
