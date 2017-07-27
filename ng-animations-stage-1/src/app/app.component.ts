import { Component } from '@angular/core';
import { Hero } from '../hero-list/hero/hero.component';
import { animate, state, style, transition, trigger } from '@angular/animations';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  animations: [
    trigger('highlight', [
      state('active', style({
        backgroundColor: '#000',
        transform: 'scale(1.1) rotate(-3deg)'
      })),
      // transition('* => active', animate(200))
    ])
  ]
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

  public isActive: boolean = false;

  public highlightButton(): void {
    this.isActive = !this.isActive;
  }
}
