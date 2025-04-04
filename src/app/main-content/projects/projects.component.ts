import { Component } from '@angular/core';
import { SingleprojectsComponent } from "./singleprojects/singleprojects.component";

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [SingleprojectsComponent],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.scss'
})
export class ProjectsComponent {

}
