import { Component, OnInit } from '@angular/core';

import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from 'angularfire2/firestore';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { AngularFireAuth } from '@angular/fire/auth';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';
import { Todo, Item } from '../Todo.model';
import { LocalNotifications } from '@ionic-native/local-notifications/ngx';
import { Platform } from '@ionic/angular';
@Component({
  selector: 'app-list',
  templateUrl: 'list.page.html',
  styleUrls: ['list.page.scss']
})
export class ListPage implements OnInit {
  //todos: Todo[];
  inputItem = '';
  itemsDoc: AngularFirestoreDocument<Item>;
  items: Observable<Todo[]>;
  email: string;
  constructor(public afs: AngularFirestore,
    public afAuth: AngularFireAuth, 
    public authService: AuthService, 
    public router: Router,
    private plt: Platform,
    private localNotification: LocalNotifications) {
    this.afAuth.auth.onAuthStateChanged(user => {
      if (user) {
        this.selectItems(user.email);
        this.email = user.email;
      }
    });
    // this.itemsDoc.collection<Todo>('todo').ref.where('status','==',false
    this.localNotification.schedule({
      id:1,
      title: 'Welcome',
      text: this.email+'\n',
      // data: { mydata: 'my data'},
      foreground : true

    });
  }

  ngOnInit() {

  }
  selectItems(email: string) {
    this.itemsDoc = this.afs.doc<Item>('users/' + email);
    this.items = this.itemsDoc.collection<Todo>('todo').valueChanges();
    // // turn on logging if you want to see how the requests are sent
    // this.groceryItemsDoc.collection<GroceryItem>('GroceryItems').auditTrail().subscribe(console.log);
  }
  add(name: string) {
    const id = this.afs.createId();
    const todo = { name: name, id: id, status: false };
    this.itemsDoc.collection<Todo>('todo').doc(id).set(todo).then(() => {
      this.inputItem = '';
    })
      .catch((error) => {
        alert(error);
      });
  };

  delete(item) {
    this.itemsDoc.collection<Todo>('todo').doc(item.id).delete();
  }

  update(item) {
    if (item.status) { item.status = false; } else { item.status = true; }
    this.itemsDoc.collection<Todo>('todo').doc(item.id).set(item);
  }

  signOut() {
    this.authService.signOut()
      .then(() => { this.router.navigate(['/signup']); })
      .catch();
  }

}
