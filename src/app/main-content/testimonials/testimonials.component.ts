import { Component } from '@angular/core';
import { LanguageService } from '../../language.service';
@Component({
  selector: 'app-testimonials',
  standalone: true,
  templateUrl: './testimonials.component.html',
  styleUrl: './testimonials.component.scss'
})
export class TestimonialsComponent {
  constructor(public langService: LanguageService) { }
}
