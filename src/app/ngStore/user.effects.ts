import { Injectable } from '@angular/core';
import { Action } from '@ngrx/store';
import { Effect, Actions, ofType } from '@ngrx/effects';
import * as UserActions from '../ngStore/user.actions';

import * as Rx from 'rxjs';
import * as RxOp from 'rxjs/operators';
import { FakeRequestService } from '../fake-request.service';


@Injectable()
export class UserEffects {
  constructor(private actions$: Actions, private fakeRequest: FakeRequestService) { }

  @Effect({ dispatch: true })
  loadUsers$: Rx.Observable<any> = this.actions$
  .pipe(
    ofType(UserActions.LOAD_USERS),
    RxOp.tap(() => { console.log('Triggering Request from effect'); }),
    RxOp.switchMap(() => {
      return this.fakeRequest.loadUser().pipe(
        // RxOp.tap((users) => { console.log('Receiving Request from effect', users); }),
        RxOp.map(users => new UserActions.LoadUsersOk(users)),
        RxOp.catchError(() => Rx.EMPTY)
      );
    })
  );

}
