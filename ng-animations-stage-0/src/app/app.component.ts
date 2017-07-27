import { Component } from '@angular/core';
import { Hero } from '../hero-list/hero/hero.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public title: string = 'Angular Animations';

  public heroes: Hero[] = [
    {name: 'Ant-Man', power: 'technology'},
    {name: 'Black Widow', power: 'gun'},
    {name: 'Doctor Strange', power: 'magic'},
    {name: 'Hawkeye', power: 'bow'},
    {name: 'Hulk', power: 'strength'},
    {name: 'Iron Man', power: 'technology'},
    {name: 'Spider-Man', power: 'agility'}
  ];
}
