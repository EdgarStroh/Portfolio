import { Component } from '@angular/core';
import { MainContentComponent } from "./main-content/main-content.component";
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [
    RouterOutlet
],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'Edgar Stroh';
}
