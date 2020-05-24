import { createAction, props } from '@ngrx/store';
import { Update } from '@ngrx/entity';
import { User } from '../models/user';

export const getUsersRequest = createAction('[Users Page] Get Users Request');

export const getUsersSuccess = createAction(
  '[Users Page] Get Users Success',
  props<{ users: User[] }>()
);

export const setSelectedUserId = createAction(
  '[Users Page] Set Selected UserId',
  props<{ userId: number }>()
);

export const deleteUser = createAction(
  '[User Detail Page] Delete Selected User',
  props<{ userId: number }>()
);

export const updateUser = createAction(
  '[User Detail Page] Update Selected User',
  props<{ payload: Update<User> }>()
);
