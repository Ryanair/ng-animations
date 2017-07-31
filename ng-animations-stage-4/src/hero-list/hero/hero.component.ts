import { Component, EventEmitter, Input, Output } from '@angular/core';

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
  @Output() public dismissed: EventEmitter<Hero> = new EventEmitter<Hero>();

  public dismiss($event: any): void {
    this.dismissed.emit(this.hero);
  }
}
