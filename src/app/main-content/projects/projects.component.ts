import { Component } from '@angular/core';
import { JoinComponent } from '../projects/join/join.component';
import { SingleprojectsComponent } from "./singleprojects/singleprojects.component";

@Component({
  selector: 'app-projects',
  // standalone: true,
  imports: [
    // JoinComponent, 
    SingleprojectsComponent],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.scss'
})
export class ProjectsComponent {

}
