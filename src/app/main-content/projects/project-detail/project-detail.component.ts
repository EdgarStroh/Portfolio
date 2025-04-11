import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PROJECTS } from './project-data';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from "../../../shared/header/header.component";

@Component({
  standalone: true,
  selector: 'app-project-detail',
  imports: [CommonModule, HeaderComponent],
  templateUrl: './project-detail.component.html',
  styleUrls: ['./project-detail.component.scss']
})
export class ProjectDetailComponent {
  project: any;
  projectFound: boolean = false;  // Flag to track if project is found

  constructor(private route: ActivatedRoute) {
    this.route.params.subscribe(params => {
      const slug = params['slug']; // Slug aus der URL holen
      // Findet das Projekt basierend auf dem slug
      this.project = PROJECTS.find(p => p.slug === slug);

      // Wenn Projekt gefunden, setze projectFound auf true
      this.projectFound = !!this.project;
    });
  }

}
