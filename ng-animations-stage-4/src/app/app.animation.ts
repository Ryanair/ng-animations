import { animate, state, style, transition, trigger } from '@angular/animations';

export const highlightAnimation = trigger('highlight', [
  state('active', style({
    backgroundColor: '#000',
    transform: 'scale(1.1) rotate(-3deg)'
  })),
  transition('* <=> active', animate(200))
]);
