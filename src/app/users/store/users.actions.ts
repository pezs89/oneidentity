import { createAction, props } from '@ngrx/store';
import { User } from '../models/user';

export const getUsersRequest = createAction('[Users Page] Get Users Request');

export const getUsersSuccess = createAction(
  '[Users Page] Get Users Success',
  props<{ users: User[] }>()
);
