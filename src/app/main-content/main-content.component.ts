import { Component } from '@angular/core';
import { AboutMeComponent } from './about-me/about-me.component';
import { HeroComponent } from './hero/hero.component';
import { ProjectsComponent } from './projects/projects.component';
import { ContactComponent } from './contact/contact.component';
import { SkillsComponent } from './skills/skills.component';
import { TestimonialsComponent } from './testimonials/testimonials.component';
import { HeaderComponent } from "../shared/header/header.component";

@Component({
  selector: 'app-main-content',
  standalone: true,
  imports: [
    AboutMeComponent,
    HeroComponent,
    ProjectsComponent,
    ContactComponent,
    SkillsComponent,
    TestimonialsComponent,
    HeaderComponent
],
  templateUrl: './main-content.component.html',
  styleUrls: ['./main-content.component.scss']
})
export class MainContentComponent { }

