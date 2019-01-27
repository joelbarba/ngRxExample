import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { User, Users } from '../ngStore/user.reducer';
import * as UserActions from '../ngStore/user.actions';
import * as TutorialActions from '../ngStore/user.actions';
import * as Rx from 'rxjs';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.scss']
})
export class CreateComponent implements OnInit {

  constructor(private store: Store<Users>) {}
  ngOnInit() { }

  addUser(username, email, first_name, last_name) {
    this.store.dispatch(
      new UserActions.AddUser({ username, email, first_name, last_name })
    );
  }

}
