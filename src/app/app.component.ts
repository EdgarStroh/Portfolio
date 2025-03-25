import { Component } from '@angular/core';
import { HeroContentComponent } from "./main-content/main-content.component";
// import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [
    HeroContentComponent
],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'EdgarStroh';
}
