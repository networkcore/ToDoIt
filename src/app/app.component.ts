import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ToDoIt';
  version = '0.0.1';
  
  resolvedtodos = [
    {
      label: 'Implement basic functionalities',
    }
  ];
  
  todos = [
    {
      label: 'Finish new page layout',
    },
    {
      label: 'Display error messages',
    },
    {
      label: 'Add more task attributes'
    }
  ];

  addTodo(newTodoLabel) {
    var newTodo = {
      label: newTodoLabel
    };

    if(newTodo.label == '') {  
      
   } else {
    //this.todos.push(newTodo); 
    this.todos.unshift(newTodo);
   }
   
    
  }

  resolveTodo(newTodoLabel, todo) {
    var newTodo = {
      label: newTodoLabel
    };

    this.resolvedtodos.unshift(newTodo);
    this.todos.splice(todo, 1);
  }
  

  deleteTodo(todo) {
    this.todos = this.todos.filter( t => t.label !== todo.label);
  }
}
