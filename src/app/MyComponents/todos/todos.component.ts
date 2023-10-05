import { Component } from '@angular/core';
import { Todo } from 'src/app/Todo';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css']
})
export class TodosComponent {

  todos!: Todo[];
  constructor(){
    this.todos = [
      {
        sno:1,
        title:"Gathering info",
        desc:"Data Producer",
        active:true
      },
      {
        sno:2,
        title:"Metadata",
        desc:"Data Modelling",
        active:true
      },
      {
        sno:3,
        title:"Consumer",
        desc:"Data Warehouse",
        active:true
      }
    ]
  }

}
