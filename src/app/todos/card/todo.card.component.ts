import {Component, OnInit, Input} from '@angular/core';
import {ITodo, TStatus} from '../../structures/todos';
import {TodoService} from '../../services/todos.service';

// import animations
import { pressAnimation } from '../../animations/press.animation';
import { statusAnimation } from '../../animations/status.animation';

import * as moment from 'moment';
moment.locale('es');

@Component({
  selector: 'todo-card',
  templateUrl: 'todo.card.component.html',
  animations: [ pressAnimation, statusAnimation ]
})
export class TodoCardComponent implements OnInit {
  @Input() todo : ITodo;
  @Input() listId : string;
  public press : string = 'up'; // up|down
  public moment : any = moment;

  constructor(private todoS : TodoService) {}
  ngOnInit() {}

  completed() {
    this.todo.status = TStatus.Completed;
    setTimeout(()=>this.todoS.update(this.listId, this.todo), 300);
  }
}
