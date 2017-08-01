import { animate, query, transition, trigger, style, stagger, keyframes } from '@angular/animations';

export const slideStaggerAnimation = trigger('slideStagger', [
  transition('* => *', [
    query(':enter', style({ opacity: 0 }), { optional: true }),
    query(':enter', stagger('200ms', [
      animate('500ms ease-in', keyframes([
        style({ opacity: 0, transform: 'translateY(-20px)' }),
        style({ opacity: 0.5, transform: 'translateY(5px)' }),
        style({ opacity: 1, transform: 'translateY(0)' })
      ])),
    ]), { optional: true }),
    query(':leave', stagger('100ms', [
      animate('200ms ease-out', style({ opacity: 0 }))
    ]), { optional: true })
  ])
]);
