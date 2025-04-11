import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { SingledataService } from '../singleprojects.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-singleprojects',
  imports: [CommonModule],  // Hier wird *ngFor verfügbar gemacht
  templateUrl: './singleprojects.component.html',
  styleUrls: ['./singleprojects.component.css']
})
export class SingleprojectsComponent {

  projectlist: { img: string; name: string; description: string; logo?: string; }[] = [];

  constructor(private singledataService: SingledataService, private router: Router) {
    this.projectlist = this.singledataService.projectlist;
  }

  openProjectDetail(title: string) {
    const slug = this.generateSlug(title);
    this.router.navigate(['/projects', slug]);
  }

  goToProject(title: string): void {
    const slug = this.generateSlug(title);
    this.router.navigate(['/projects', slug]);
  }
  
  generateSlug(title: string): string {
    return title.toLowerCase().replace(/\s+/g, '-');
  }
}
