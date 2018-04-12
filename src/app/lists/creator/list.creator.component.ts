import {Component, OnInit} from '@angular/core';

import {IList} from '../../structures/lists';

@Component({
  selector: 'creator',
  templateUrl: 'list.creator.component.html'
})
export class ListCreatorComponent implements OnInit{
  public list : IList = {title: ''}

  ngOnInit() {}

  save() {
    console.log(this.list);
  }
}
