import { Component } from '@angular/core';
import { JoinComponent } from '../projects/join/join.component';

@Component({
  selector: 'app-projects',
  // standalone: true,
  imports: [ JoinComponent ],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.scss'
})
export class ProjectsComponent {

}
