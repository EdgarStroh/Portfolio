import { Component } from '@angular/core';
import { FooterComponent } from "../../shared/footer/footer.component";

@Component({
  selector: 'app-contact',
  standalone: true,
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss',
  imports: [FooterComponent]
})
export class ContactComponent {

}
