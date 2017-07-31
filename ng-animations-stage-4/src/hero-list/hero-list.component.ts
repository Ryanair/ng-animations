import { Component, Input } from '@angular/core';
import { Hero } from './hero/hero.component';
import { slideStaggerAnimations } from './hero-list.animations';

@Component({
  selector: 'hero-list',
  templateUrl: './hero-list.component.html',
  styleUrls: ['./hero-list.component.css'],
  animations: [
    slideStaggerAnimations
  ]
})
export class HeroListComponent {
  @Input() public heroes: Hero[];

  public onDismissed($event): void {
    const index = this.heroes.findIndex((h) => h === $event);
    this.heroes.splice(index, 1);
  }
}
