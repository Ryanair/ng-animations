import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Hero } from './hero/hero.component';
import { slideStaggerAnimation } from './hero-list.animation';

@Component({
  selector: 'hero-list',
  templateUrl: './hero-list.component.html',
  styleUrls: ['./hero-list.component.css'],
  animations: [slideStaggerAnimation]
})
export class HeroListComponent {
  @Input() public heroes: Hero[];
}
