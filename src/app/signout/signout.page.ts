import { Component, OnInit } from '@angular/core';
import { AuthService} from '../auth.service';
import { Router} from '@angular/router';
import { Todo, TodoService } from '../todo.service'
@Component({
  selector: 'app-signout',
  templateUrl: './signout.page.html',
  styleUrls: ['./signout.page.scss'],
})
export class SignoutPage implements OnInit {

  constructor( private autherService: AuthService, private router: Router) { }

  ngOnInit() {
  }
  public signOut() {
    //this.todoService.getTodos().subscribe().unsubscribe();
    this.autherService.signOut()
    .then(() => {this.router.navigate(['/signup']); })
    .catch();
  }
}
