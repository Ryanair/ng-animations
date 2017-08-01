import { Component, Input } from '@angular/core';
import { fadeInAnimation } from './hero.animation';


export interface Hero {
  name: string;
  power: string;
}

@Component({
  selector: 'hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.css'],
  animations: [fadeInAnimation]
})
export class HeroComponent {
  @Input() public hero: Hero;

  public heroState: string = 'hidden';

  public hideDescription(): void {
    this.heroState = 'visible';
  }

  public isDone: boolean = false;

  public animationDone($event: any): void {
    if ($event.toState === 'visible') {
      this.isDone = true;
    }
  }
}
