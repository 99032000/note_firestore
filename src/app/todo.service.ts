import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from 'angularfire2/firestore';
import { Observable } from 'rxjs';
import { AppComponent } from './app.component';
import { map } from 'rxjs/operators';
import { AngularFireAuth } from '@angular/fire/auth';
import { AuthService } from './auth.service';
import { Router } from '@angular/router';
import { SignoutPage } from './signout/signout.page';
export interface Todo {
  name: string;
  status: boolean;
}
@Injectable({
  providedIn: 'root'
})
export class TodoService {
  private todosCollection: AngularFirestoreCollection<Todo>;
  private todos: Observable<Todo[]>;
  private email: string;
  constructor(db: AngularFirestore, appComponent: AppComponent,
    afth: AngularFireAuth, private autherService: AuthService, private router: Router) {
    //this.email = appComponent.email;
    
    
    try {
      console.log('todoservice hey');
      this.todosCollection = db.collection<Todo>(afth.auth.currentUser.email);
      this.todos = this.todosCollection.snapshotChanges().pipe(
        map(actions => {
          return actions.map(a => {
            const data = a.payload.doc.data();
            const id = a.payload.doc.id;
            return { id, ...data };
          });
        })
      );
    } catch (ex) {
      this.signOut();
    }
  }
  signOut() {
    this.autherService.signOut()
      .then(() => { this.router.navigate(['/signup']); })
      .catch();
  }
  getTodos() {
    return this.todos;
  }
  getTodo(id) {
    return this.todosCollection.doc<Todo>(id).valueChanges();
  }
  removeTodo(id) {
    return this.todosCollection.doc(id).delete();
  }
  addTodo(todo: Todo) {
    return this.todosCollection.add(todo);
  }
  updateTodo(todo: Todo, id: string) {
    return this.todosCollection.doc(id).update(todo);
  }
  getAll() {

    return this.todos;
  }
}
