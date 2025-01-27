import { trigger, state, style, transition, animate } from '@angular/animations';

export const luzDestacadaTrigger = trigger('luzDestacada', [
  state('default', style({
    border: '2px solid #b2b6ff',
    // ...estilos...
  })),
  state('iluminado', style({
    border: '4px solid #b2b6ff',
    filter: 'brightness(92%)',
  })),
  transition('default <=> iluminado', [
    style({ transform: 'scale(1.02)' }),
    animate('300ms ease-in')
  ])
]);

export const shownStateTrigger = trigger('shownState', [
  transition(':enter', [
    style({
      opacity: 0
    }),
    animate(300, style({
      opacity: 1
    }))
  ]),
  transition(':leave', [
    animate(300, style({
      opacity: 0
    }))
  ])
])


export const checkButtonTrigger = trigger('checkButton', [
  transition('* => checked', [
    animate('400ms ease-in', style({
      transform: 'scale(0.4)'
    }))
  ])
])
