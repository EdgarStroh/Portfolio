import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { SingledataService } from '../singleprojects.service';

@Component({
  selector: 'app-singleprojects',
  imports: [CommonModule],  // Hier wird *ngFor verfügbar gemacht
  templateUrl: './singleprojects.component.html',
  styleUrls: ['./singleprojects.component.css']
})
export class SingleprojectsComponent {

  projectlist: { img: string; name: string; description: string; logo?: string; }[] = [];

  constructor(private singledataService: SingledataService) {
    this.projectlist = this.singledataService.projectlist;
  }


}
