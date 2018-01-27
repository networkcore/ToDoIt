import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ToDoIt';
  version = '0.0.1';

  errorMessage : string;
  infoMessage : string;
  
  resolvedtodos = [
    {
      label: 'Implement basic functionalities',
    }
  ];
  
  todos = [
    {
      label: 'Add more task attributes',
    }
  ];




  addTodo(newTodoLabel, todos) {
    var newTodo = {
      label: newTodoLabel
    };

    var isSame = this.todos.some(function(o){
      return o.label.toLowerCase() === newTodoLabel.toLowerCase();
    });
   
    
    if(newTodo.label == '') {  
      this.errorMessage = "Task description can't be empty";
   } else {
    if(isSame) {
      this.errorMessage = 'Task already exists'
    } else {
    //this.todos.push(newTodo); 
    this.todos.unshift(newTodo);
    this.errorMessage = ''; 
    this.infoMessage = "";
    }
   }

    
  }

  

  resolveTodo(newTodoLabel, todo) {
    var newTodo = {
      label: newTodoLabel
    };

    this.resolvedtodos.unshift(newTodo);

    this.todos = this.todos.filter( t => t.label !== todo.label);

    if(this.todos.length)
    {
      this.infoMessage = "";
    }
    else{
      this.infoMessage = "There are no open tasks";
    }
  }
  

  deleteTodo(todo) {
    this.todos = this.todos.filter( t => t.label !== todo.label);
    this.errorMessage = ''; 

    if(this.todos.length)
    {
      this.infoMessage = "";
    }
    else{
      this.infoMessage = "There are no open tasks";
    }
  
  }


}
