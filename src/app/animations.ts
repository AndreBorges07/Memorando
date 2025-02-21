import { trigger, state, style, transition, animate, keyframes, group, query, stagger } from '@angular/animations';

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
    query('#botao-salvar', [ // Com o queryconsigo animar específico, posso colocar classe e até as tags html
      group([
        animate(200, style({
          backgroundColor: '#63b77c'
        })),
        animate(200, style({
          transform: 'scale(1.1)'
        })),
      ]),
      animate(200, style({
        transform: 'scale(1)'
      }))
    ]),
  ]),
  transition('valid => invalid', [
    query('#botao-salvar', [
      group([
        animate(200, style({
          backgroundColor: '#6c757d'
        })),
        animate(200, style({
          transform: 'scale(1.1)'
        })),
      ]),
      animate(200, style({
        transform: 'scale(1)'
      }))
      ]),
    ])

])

export const semTarefasTrigger = trigger('semTarefasTrigger', [
  transition(':enter', [
    style({ opacity: 0, transform: 'translateY(-20px)' }), // Começa invisível e um pouco acima
    animate('300ms ease-out', keyframes([
      style({ opacity: 0, transform: 'translateY(-20px)', offset: 0 }), // Início
      style({ opacity: 1, transform: 'translateY(10px)', offset: 0.6 }), // Pula para baixo
      style({ opacity: 1, transform: 'translateY(0)', offset: 1 }) // Volta à posição normal
    ]))
  ]),
  transition(':leave', [
    animate('300ms ease-in', keyframes([
      style({ opacity: 1, transform: 'scale(1)', offset: 0 }), // Início
      style({ opacity: 0.5, transform: 'scale(0.8)', offset: 0.5 }), // Encolhe um pouco
      style({ opacity: 0, transform: 'scale(0.5)', offset: 1 }) // Desaparece completamente
    ]))
  ])
]);

export const shakeTrigger = trigger('shakeAnimation', [
  transition('* => *', [
    query('input.ng-invalid:focus, select.ng-invalid:focus', [ // Pega os inputs inválidos que estão focados
      animate(300, keyframes([
        style({ border: '2px solid red'}),
        style({ transform: 'translateX(-10px)'}),
        style({ transform: 'translateX(10px)'}),
        style({ transform: 'translateX(-10px)'}),
        style({ transform: 'translateX(10px)'}),
        style({ transform: 'translateX(-10px)'}),
        style({ transform: 'translateX(10px)'}),
        style({ transform: 'translateX(-10px)'}),
        style({ transform: 'translateX(10px)'}),
        style({ transform: 'translateX(-10px)'}),
        style({ transform: 'translateX(0)' })
      ]))
    ], { optional: true }), // O { optional: true } é para não dar erro se não encontrar o elemento
  ])
]
)

export const listStateTrigger = trigger('listState', [
  transition('* => *', [
    query(':enter', [
      style({
        opacity: 0,
        transform: 'translateX(-100%)'
      }),
      stagger(200, [
        animate('500ms ease-out', keyframes([
          style({
            opacity: 1,
            transform: 'translateX(15%)',
            offset: 0.4
          }),
          style({
            opacity: 1,
            transform: 'translateX(0)',
            offset: 1
          }),
        ]))
      ]),
    ], { optional: true }),
  ])
]);
