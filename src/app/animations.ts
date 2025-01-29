import { BackgroundColor, backgroundColorNames } from './../../node_modules/json-server/node_modules/chalk/source/vendor/ansi-styles/index.d';
import { trigger, state, style, transition, animate, keyframes } from '@angular/animations';

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

export const checkButtonTrigger = trigger('checkButton', [
  transition('* <=> checked', [ // unchecked <=> checked
    animate('300ms ease-in', style({
      transform: 'scale(0.4)'
    })
    )
  ])
]);

export const filterTrigger = trigger('filterAnimation', [
  transition(':enter', [
    style({
      opacity: 0,
      width: 0
    }),
    animate('800ms ease-out', keyframes([
      style({ offset: 0, opacity: 0, width: 0 }),
      style({ offset: 0.8, opacity: 0.5, width: '*' }),
      style({ offset: 1, opacity: 1, width: '*' })
    ]))
  ]),
  transition(':leave', [
    animate(300, style({
      opacity: 0,
      width: 0
    }))
  ])
]
)

export const formButtonTrigger = trigger('formButton', [
  transition('invalid => valid', [
    animate(200, style({
      backgroundColor: '#63b77c'
    })),
    animate(200, style({
      transform: 'scale(1.1)'
    })),
    animate(200, style({
      transform: 'scale(1)'
    }))

  ]),

]
)
