import { Action } from '@ngrx/store';
import * as UserActions from './user.actions';

// State model
export interface User {
  id         : string;
  username   : string;
  email      : string;
  first_name : string;
  last_name  : string;
}
export interface Users {
  readonly list   : User[];
  readonly count  : number;
  readonly status : number;  // 0:Empty, 1=Loading, 2=Loaded, 3=Error
}

// Initial State
const initialUsers: Users = {
  list   : [],
  count  : 0,
  status : 2
};

// Reducer
export function userReducer(state: Users = initialUsers, action: UserActions.Actions) {
  switch (action.type) {

    case UserActions.ADD_USER:
          const newState = { ...state };
          newState.count++;
          newState.list.push({ id: newState.count + '', first_name: '', last_name: '', ...action.payload });
          return newState;

    case UserActions.UPDATE_USER:
          const newList = state.list.map((user) => {
            if (user.id === action.payload.id) {
              return { ...user, ...action.payload };
            } else {
              return user;
            }
          });
          return { ...state, list: newList };

    case UserActions.REMOVE_USER:
          const next = { ...state };
          next.list = state.list.filter(user => user.id !== action.payload.id );
          next.count = next.list.length;
          return next;

    default: return state;
  }
}



export function metaReducer(reducer) {
  return function (state, action) {
    console.log('This is the meta reducer', state);
    return reducer(state, action);
  };
}

// Initial State
// const initialState: Tutorial = {
//   name: 'Initial Tutorial',
//   url: 'http://google.com'
// };

// Reducer
// export function reducer(state: Tutorial[] = [initialState], action: TutorialActions.Actions) {
//   switch (action.type) {

//     case TutorialActions.ADD_TUTORIAL:
//           console.log('The state is: ', [...state, action.payload]);
//           return [...state, action.payload];

//     case TutorialActions.REMOVE_TUTORIAL:
//           state.splice(action.payload, 1);
//           console.log('The state is: ', state);
//           return state;

//     default: return state;
//   }
// }

// export function clearState(reducer) {
//   return function (state, action) {

//     if (action.type === TutorialActions.LOGOUT) {
//       state = undefined;
//     }

//     return reducer(state, action);
//   };
// }
