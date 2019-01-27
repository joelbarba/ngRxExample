import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { User, Users } from '../ngStore/user.reducer';
import * as UserActions from '../ngStore/user.actions';
import * as Rx from 'rxjs';
import * as RxOp from 'rxjs/operators';


@Component({
  selector: 'app-read',
  templateUrl: './read.component.html',
  styleUrls: ['./read.component.scss']
})
export class ReadComponent implements OnInit {

  // Observable to display in the view
  // tutorials: Rx.Observable<Tutorial[]>;
  usersList$: Rx.Observable<User[]>;

  constructor(private store: Store<Users>) {
    // Subscribe to the 'tutorial' model of the Store
    // this.tutorials = store.select('tutorial');
    this.usersList$ = store.select('users').pipe(
      RxOp.map(users => users.list )
    );
  }

  ngOnInit() {
    this.store.dispatch(
      new UserActions.AddUser({ username: 'joel.barba', email: 'joel@barba.com', first_name: 'Joel', last_name: 'Barba'})
    );
    this.store.dispatch(
      new UserActions.AddUser({ username: 'denethor', email: 'denethor@barba.com', first_name: 'Syrax', last_name: 'Targaryen' })
    );
    this.store.dispatch(
      new UserActions.AddUser({ username: 'denethor2', email: 'denethor2@barba.com', first_name: 'Syrax', last_name: 'Targaryen' })
    );

  }

  addUser(username, email, first_name, last_name) {
    this.store.dispatch(
      new UserActions.AddUser({ username, email, first_name, last_name })
    );
  }

  updateUser(user: User) {
    this.store.dispatch(
      new UserActions.UpdateUser({ id: user.id, first_name: (new Date() + '') })
    );
  }

  deleteUser(user: User) {
    this.store.dispatch(new UserActions.RemoveUser({ id: user.id }));


      // console.log('deletting ', ind);
    // this.store.dispatch(new TutorialActions.RemoveTutorial(ind) );
  }

}
