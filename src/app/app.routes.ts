import { Routes } from '@angular/router';
import { SingleprojectsComponent } from './main-content/projects/singleprojects/singleprojects.component';
import { ProjectDetailComponent } from './main-content/projects/project-detail/project-detail.component';
import { MainContentComponent } from './main-content/main-content.component';

export const routes: Routes = [
  { path: '', component:  MainContentComponent},
  { path: 'projects/:slug', component: ProjectDetailComponent }
];


