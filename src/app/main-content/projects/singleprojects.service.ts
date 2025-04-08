import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SingledataService {

  constructor() { }

  projectlist: { img: string; name: string; description: string; }[] = [
    {
      img: "assets/img/projects/laptop.png",
      name: "Join",
      description: "Task manager inspired by the Kanban System. Create and organize tasks using drag and drop functions, assign users and categories.",
    },
    {
      img: "assets/img/projects/pokedex.png",
      name: "Pokedex",
      description: "Task manager inspired by the Kanban System. Create and organize tasks using drag and drop functions, assign users and categories.",
    },
    {
      img: "assets/img/projects/elpolloloco.png",
      name: "El Pollo Loco",
      description: "Jump, run and throw game based on object-oriented approach. Help Pepe to find coins and tabasco salsa to fight against the crazy hen.",
    }
  ];
  
}
