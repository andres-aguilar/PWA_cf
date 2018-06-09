import { Component, OnInit } from '@angular/core';
import { ListService } from '../services/lists.service';
import { enterState } from '../animations/enter.animation';

@Component({
  selector: 'app-home',
  templateUrl: 'home.component.html',
  animations: [ enterState ]
})
export class HomeComponent implements OnInit {
  public message: string;

  constructor(public listS : ListService) {}

  ngOnInit() {}
}
