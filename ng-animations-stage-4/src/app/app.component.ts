import { Component } from '@angular/core';
import { Hero } from '../hero-list/hero/hero.component';
import { highlightAnimations } from './app.animations';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  animations: [
    highlightAnimations
  ]
})
export class AppComponent {
  public title: string = 'Angular Animations';

  public heroes: Hero[] = [];

  /* Button-related code */
  public isActive: boolean = false;

  public get buttonState(): string {
    return this.isActive ? 'active' : '';
  }

  public highlightButton(): void {
    this.isActive = !this.isActive;
  }

  /* HeroList-related code */
  public isLoaded: boolean = false;

  public get hasHeroes(): boolean {
    return this.heroes.length > 0;
  }

  public toggleHeroes(): void {
    this.heroes = this.hasHeroes ? [] : [
      {name: 'Ant-Man', power: 'technology'},
      {name: 'Black Widow', power: 'gun'},
      {name: 'Doctor Strange', power: 'magic'},
      {name: 'Hawkeye', power: 'bow'},
      {name: 'Hulk', power: 'strength'},
      {name: 'Iron Man', power: 'technology'},
      {name: 'Spider-Man', power: 'agility'}
    ];

    this.isLoaded = this.hasHeroes;
  }
}
