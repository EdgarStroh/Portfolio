import { Component } from '@angular/core';
// import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from "./shared/header/header.component";
import { AboutMeComponent } from './about-me/about-me.component';
import { HeroComponent } from './hero/hero.component';
import { ProjectsComponent } from './projects/projects.component';
import { ContactComponent } from './contact/contact.component'
import { SkillsComponent } from './skills/skills.component';
import { TestimonialsComponent } from './testimonials/testimonials.component';

@Component({
  selector: 'app-root',
  imports: [
    // RouterOutlet, 
    HeaderComponent,
    AboutMeComponent, HeroComponent, 
    ProjectsComponent, ContactComponent, 
    SkillsComponent, TestimonialsComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'EdgarStroh';
}
