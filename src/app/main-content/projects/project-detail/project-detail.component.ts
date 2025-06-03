import { Component } from '@angular/core';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { PROJECTS } from './project-data';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from "../../../shared/header/header.component";
import { LanguageService } from '../../../language.service';
type ProjectKey = 'join' | 'pokedex' | 'elpolloloco';

@Component({
  standalone: true,
  selector: 'app-project-detail',
  imports: [CommonModule, HeaderComponent, RouterModule],
  templateUrl: './project-detail.component.html',
  styleUrls: ['./project-detail.component.scss']
})
export class ProjectDetailComponent {
  project: any;
  projectFound = false;
  nextSlug: string | null = null;
  projectKey: ProjectKey | null = null;


  constructor(private route: ActivatedRoute, private router: Router, public langService: LanguageService) {
    this.route.params.subscribe(params => {
      const slug = params['slug'];
      this.project = PROJECTS.find(p => p.slug === slug);
      this.projectFound = !!this.project;

      if (slug === 'join' || slug === 'pokedex' || slug === 'elpolloloco') {
        this.projectKey = slug;
      } else {
        this.projectKey = 'join';
      }

      this.setNextSlug(slug);
    });
  }

  setNextSlug(currentSlug: string) {
    const currentIndex = PROJECTS.findIndex(p => p.slug === currentSlug);

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

  openLink(url: string) {
    window.open(url, '_blank', 'noopener');

  }

}