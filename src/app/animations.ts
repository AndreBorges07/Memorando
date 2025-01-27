import { trigger, state, style, transition, animate } from '@angular/animations';

export const luzDestacadaTrigger = trigger('luzDestacada', [
  state('default', style({
    border: '2px solid #b2b6ff',
  })),
  state('iluminado', style({
    border: '4px solid #b2b6ff',
    filter: 'brightness(92%)',
  })),
  transition('default <=> iluminado', [ // <=> é o mesmo que bidirecional
    style({ transform: 'scale(1.02)' }),
    animate('300ms ease-in')
  ])
]);

export const mostrandoStatusTrigger = trigger('mostrandoStatus', [

  // state('formularioVisivel', style({ //O estado inicial também pode usar o "*" ou "void".

  // })),
  transition(':enter', [ // usando o ":enter" e ":leave" não precisa de um estado inicial.
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

]);

//   transition(':enter', [
//     style({
//       opacity: 0
//     }),
//     animate(300, style({
//       opacity: 1
//     }))
//   ]),
//   transition(':leave', [
//     animate(300, style({
//       opacity: 0
//     }))
//   ])
// ])


// export const checkButtonTrigger = trigger('checkButton', [
//   transition('* => checked', [
//     animate('400ms ease-in', style({
//       transform: 'scale(0.4)'
//     }))
//   ])
// ])
