import { Injectable } from '@angular/core';
import { Action } from '@ngrx/store';

export const LOAD_USERS     = '[USER] Get';
export const LOAD_USERS_OK  = '[USER] Get Ok';
export const ADD_USER       = '[USER] Add';
export const UPDATE_USER    = '[USER] Update';
export const REMOVE_USER    = '[USER] Remove';

export class LoadUsers implements Action {
  readonly type = LOAD_USERS;
  constructor(public payload: {}) {}
}

export class LoadUsersOk implements Action {
  readonly type = LOAD_USERS_OK;
  constructor(public payload: any) { }
}

export class AddUser implements Action {
  readonly type = ADD_USER;
  constructor(public payload: {
    username    : string;
    email       : string;
    first_name ?: string;
    last_name  ?: string;
  }) {}
}

export class UpdateUser implements Action {
  readonly type = UPDATE_USER;
  constructor(public payload: {
    id          : string,
    first_name ?: string;
    last_name  ?: string;
  }) {}
}

export class RemoveUser implements Action {
  readonly type = REMOVE_USER;
  constructor(public payload: { id: string }) {}
}
export type Actions = AddUser | UpdateUser | RemoveUser | LoadUsers | LoadUsersOk;




// export const ADD_TUTORIAL       = '[TUTORIAL] Add';
// export const REMOVE_TUTORIAL    = '[TUTORIAL] Remove';

// export class AddTutorial implements Action {
//   readonly type = ADD_TUTORIAL;
//   constructor(public payload: Tutorial) {}
// }

// export class RemoveTutorial implements Action {
//   readonly type = REMOVE_TUTORIAL;
//   constructor(public payload: number) {}
// }

// export type Actions = AddTutorial | RemoveTutorial;

