import { Component } from '@angular/core';
import { FooterComponent } from "../../shared/footer/footer.component";
import { ContactformComponent } from "../../contactform/contactform.component";
import { LanguageService } from '../../language.service'; 
@Component({
  selector: 'app-contact',
  standalone: true,
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss',
  imports: [FooterComponent, ContactformComponent]
})
export class ContactComponent {
 constructor(public langService: LanguageService) {}
}
