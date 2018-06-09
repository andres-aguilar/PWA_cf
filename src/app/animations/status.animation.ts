import {animate, transition, trigger, state, style} from "@angular/animations";

export const statusAnimation = trigger('statusAnimation', [
  state('0,void', style({transform: 'translateX(0)', opacity: 1})),
  state('1', style({transform: 'translateX(-100%)', opacity: 0})),
  transition('0 <=> 1', [
    animate(200, style({transform: 'translateX(0)', opacity: 1})),
    animate(200)
  ])
]);
