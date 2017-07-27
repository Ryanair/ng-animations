import { Component, Input } from '@angular/core';
import { Hero } from './hero/hero.component';

@Component({
  selector: 'hero-list',
  templateUrl: './hero-list.component.html',
  styleUrls: ['./hero-list.component.css']
})
export class HeroListComponent {
  @Input() public heroes: Hero[];
}
