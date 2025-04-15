import { Component } from '@angular/core';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { PROJECTS } from './project-data';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from "../../../shared/header/header.component";

@Component({
  standalone: true,
  selector: 'app-project-detail',
  imports: [CommonModule, HeaderComponent,RouterModule],
  templateUrl: './project-detail.component.html',
  styleUrls: ['./project-detail.component.scss']
})
export class ProjectDetailComponent {
  project: any;
  projectFound = false;
  nextSlug: string | null = null;

  constructor(private route: ActivatedRoute, private router: Router) {
    this.route.params.subscribe(params => {
      const slug = params['slug'];
      this.project = PROJECTS.find(p => p.slug === slug);
      this.projectFound = !!this.project;
      this.setNextSlug(slug);
    });
  }

  setNextSlug(currentSlug: string) {
    const currentIndex = PROJECTS.findIndex(p => p.slug === currentSlug);

    // Wenn aktuelles Projekt das letzte ist → nächstes ist das erste
    if (currentIndex === PROJECTS.length - 1) {
      this.nextSlug = PROJECTS[0].slug;
    } else {
      this.nextSlug = PROJECTS[currentIndex + 1].slug;
    }
  }

  goToNextProject() {
    if (this.nextSlug) {
      this.router.navigate(['/projects', this.nextSlug]);
    }
  }
}