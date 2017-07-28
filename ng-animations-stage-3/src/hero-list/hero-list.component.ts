import { Component, Input } from '@angular/core';
import { Hero } from './hero/hero.component';
import { animate, query, transition, trigger, style, stagger, keyframes } from '@angular/animations';

@Component({
  selector: 'hero-list',
  templateUrl: './hero-list.component.html',
  styleUrls: ['./hero-list.component.css'],
  animations: [
    trigger('slideStagger', [
      transition('* => *', [
        query(':enter', style({ opacity: 0 }), { optional: true }),
        query(':enter', stagger('200ms', [
          animate('500ms ease-in', keyframes([
            style({ opacity: 0, transform: 'translateY(-25px)' }),
            style({ opacity: 0.5, transform: 'translateY(5px)' }),
            style({ opacity: 1, transform: 'translateY(0)' })
          ]))
        ]), { optional: true })
      ])
    ])
  ]
})
export class HeroListComponent {
  @Input() public heroes: Hero[];
}
