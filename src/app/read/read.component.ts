import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { User, Users } from '../ngStore/user.reducer';
import * as UserActions from '../ngStore/user.actions';
import * as Rx from 'rxjs';
import * as RxOp from 'rxjs/operators';
import { FakeRequestService } from '../fake-request.service';


@Component({
  selector: 'app-read',
  templateUrl: './read.component.html',
  styleUrls: ['./read.component.scss']
})
export class ReadComponent implements OnInit {

  // Observable to display in the view
  // tutorials: Rx.Observable<Tutorial[]>;
  usersList$: Rx.Observable<User[]>;
  usersStatus$: Rx.Observable<string>;  // 0:Empty, 1=Loading, 2=Loaded, 3=Error

  constructor(private store: Store<Users>, private fakeRequest: FakeRequestService) {

    this.usersList$ = store.select('users').pipe(
      RxOp.tap((data) => { console.log('Event from observable', data); }),
      RxOp.map(users => users.list )
    );
    this.usersStatus$ = store.select('users').pipe(
      RxOp.map(state => {
        switch (state.status) {
          case 0: return 'empty';
          case 1: return 'loading';
          case 2: return 'ready';
          default: return 'error';
        }
      })
    );
    this.usersStatus$.subscribe((val) => {
      console.log('changing status', val);
    });
  }

  ngOnInit() {
    this.loadData();
  }

  loadData() {
    this.store.dispatch(new UserActions.LoadUsers({}));
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
