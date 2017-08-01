import { animate, transition, trigger, style, group, state } from '@angular/animations';

export const fadeInAnimation = trigger('fadeIn', [
  state('hidden', style({
    height: 0,
    opacity: 0,
    transform: 'translateY(-100%)'
  })),
  transition('hidden => visible', [
    group([
      animate('0.6s ease-out', style({ height: '*' })),
      animate('0.4s 200ms ease-in', style({ opacity: 1 })),
      animate('0.4s 100ms ease', style({ transform: 'translateY(0)' }))
    ])
  ])
]);
