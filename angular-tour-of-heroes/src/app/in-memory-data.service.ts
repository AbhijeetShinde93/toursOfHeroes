import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Hero } from './hero';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class InMemoryDataService {
  createDb() {
    const heroes = [
      { id: 11, name: "Superman" },
      { id: 12, name: "Batman" },
      { id: 13, name: "Thor" },
      { id: 14, name: "Hulk" },
      { id: 15, name: "Aquaman" },
      { id: 16, name: "Captain America" },
      { id: 17, name: "Dr.Strange" },
      { id: 18, name: "Thones" },
      { id: 19, name: "Black Panter" },
      { id: 20, name: "Spiderman" }
    ];
    return {heroes};
  }
  genId(heroes: Hero[]): number {
    return heroes.length > 0 ? Math.max(...heroes.map(hero => hero.id)) + 1 : 11;
  }
  constructor() { }
}
