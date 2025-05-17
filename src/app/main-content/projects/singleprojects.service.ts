import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SingledataService {

  constructor() { }

  projectlist: { img: string; name: string; logo?: string; }[] = [
    {
      img: "assets/img/projects/laptop.png",
      name: "Join",
      logo: "assets/img/skills/featured-logo.png"  
    },
    {
      img: "assets/img/projects/pokedex.png",
      name: "Pokedex",
    },
    {
      img: "assets/img/projects/elpolloloco.png",
      name: "El Pollo Loco",
    }
  ];
}
