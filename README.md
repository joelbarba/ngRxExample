# NgRx Example

This is a simple example about how to set a Store + Reducer in an Angular 7 app, using NgRX

## Model

The store contains an object Users, which has 3 properties: list, count, status.
The idea is that we store the list of users in "list", and "count" and "status" are helpers to manage the main resource.
Every user model is defined by User type.

## Actions

There are 3 different actions to perform on the State of the Store:
`[USER] Add`
`[USER] Update`
`[USER] Remove`
