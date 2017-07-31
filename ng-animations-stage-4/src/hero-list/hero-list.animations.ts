import { animate, query, transition, trigger, style, stagger, keyframes, group, state } from '@angular/animations';

export const slideStaggerAnimations = trigger('slideStagger', [
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
      animate('200ms ease-out', style({ opacity: 0 })),
    ]), { optional: true })
  ])
]);


/**
 group([
 animate('200ms linear', style({ transform: 'rotate(180deg)' })),
 animate('600ms ease-in', style({ transform: 'scale(0,0)' }))
 ])
 */
