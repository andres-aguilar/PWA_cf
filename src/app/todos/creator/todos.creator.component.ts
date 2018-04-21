import {Component, OnInit, Input} from '@angular/core';
import {ITodo, TStatus} from '../../structures/todos';
import {TodoService} from '../../services/todos.service';

@Component({
  selector: 'todo-creator',
  templateUrl: 'todos.creator.component.html'
})
export class TodoCreatorComponent implements OnInit {
  @Input() id : string;
  public todo : ITodo = {content: '', status: TStatus.Created};
  ngOnInit() {}

  constructor(private todoS : TodoService) {}
  save() {
    console.log(this.id);
    //this.todoS.add("", this.todo);
  }
}
