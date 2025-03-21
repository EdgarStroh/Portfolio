import { Component } from '@angular/core';
import { CommonModule } from '@angular/common'; 

@Component({
  selector: 'app-skills',
  standalone: true,
  templateUrl: './skills.component.html',
  styleUrl: './skills.component.scss',
  imports: [CommonModule]
})
export class SkillsComponent {
  stickerImage: string = '/assets/img/skills/sticker.png';
  private isOpen: boolean = false;

  onStickerClick(): void {
    if (!this.isOpen) {
      this.stickerImage = '/assets/img/skills/sticker2.png';
      setTimeout(() => {
        this.stickerImage = '/assets/img/skills/sticker-open.png';
        this.isOpen = true;
      }, 10);
    } else {
      this.stickerImage = '/assets/img/skills/sticker.png';
      this.isOpen = false;
    }
  }
}
