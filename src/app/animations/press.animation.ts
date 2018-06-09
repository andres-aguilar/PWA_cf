import {animate, transition, trigger, state, style} from '@angular/animations';

export const pressAnimation = trigger('pressAnimation', [
  state('up,void', style({transform: 'translateX(0)'})),
  state('down', style({transform: 'translateX(-100px)'})),
  transition('up <=> down', [
    animate(100, style({transform: 'translateX(0)'})),
    animate(100)
  ])
]);
