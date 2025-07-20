import { Injectable } from '@angular/core';
import { LanguageService } from '../../language.service';

@Injectable({
  providedIn: 'root'
})
export class SingledataService {

  constructor(public langService: LanguageService) { }

  projectlist: { img: string; name: string; logo?: string; }[] = [
    {
      img: "assets/img/projects/laptop.png",
      name: "Join",
      logo: "assets/img/skills/featured-logo.png"
    },
    {
      img: "assets/img/projects/mft.jpg",
      name: "Market Filter Tool",
    },
    {
      img: "assets/img/projects/elpolloloco.png",
      name: "El Pollo Loco",
    }
  ];
}
