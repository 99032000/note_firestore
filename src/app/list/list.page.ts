import { Component, OnInit } from '@angular/core';
import { Todo, TodoService } from '../todo.service';
@Component({
  selector: 'app-list',
  templateUrl: 'list.page.html',
  styleUrls: ['list.page.scss']
})
export class ListPage implements OnInit {
  todos: Todo[];
  constructor(private todoService: TodoService) {

  }

  ngOnInit() {
    this.todoService.getTodos().subscribe(res => {
      this.todos = res;
    });
  }

  remove(item) {
    this.todoService.removeTodo(item.id);
  }
  add(name: string) {
    const todo = { name: name, status: false };
    this.todoService.addTodo(todo);
  }
  update(item) {
    if (item.status) { item.status = false; } else { item.status = true; }
    this.todoService.updateTodo(item,item.id);
  }
  delete(item){
    this.todoService.removeTodo(item.id);
  }
  // add back when alpha.4 is out
  // navigate(item) {
  //   this.router.navigate(['/list', JSON.stringify(item)]);
  // }
}
