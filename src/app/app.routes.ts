import { Routes } from '@angular/router';
import { HeroComponent } from './hero/hero.component';
import { AboutMeComponent } from './about-me/about-me.component';
import { ProjectsComponent } from './projects/projects.component';
import { ContactComponent } from './contact/contact.component';

export const routes: Routes = [
  { path: '', component: HeroComponent }, // Startseite (alles sichtbar)
  { path: 'about-me', component: AboutMeComponent },
  { path: 'projects', component: ProjectsComponent },
  { path: 'contact', component: ContactComponent }
];