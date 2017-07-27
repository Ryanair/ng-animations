import { Component, Input } from '@angular/core';

export interface Hero {
  name: string;
  power: string;
}

@Component({
  selector: 'hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.css'],
})
export class HeroComponent {
  @Input() public hero: Hero;
}
