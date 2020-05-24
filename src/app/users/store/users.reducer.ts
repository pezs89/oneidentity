import {
  createReducer,
  on,
  Action,
  createFeatureSelector,
  createSelector,
} from '@ngrx/store';
import { EntityState, createEntityAdapter } from '@ngrx/entity';

import * as UsersActions from './users.actions';
import { User } from '../models/user';

export interface UsersState extends EntityState<User> {
  selectedUserId: number;
}

export const adapter = createEntityAdapter<User>();

export const initialState = adapter.getInitialState({
  selectedUserId: undefined,
});

export const usersReducer = createReducer<UsersState>(
  initialState,
  on(UsersActions.getUsersSuccess, (state, { users }) =>
    adapter.setAll(users, state)
  ),
  on(UsersActions.setSelectedUserId, (state, { userId }) => ({
    ...state,
    selectedUserId: userId,
  })),
  on(UsersActions.deleteUser, (state, { userId }) =>
    adapter.removeOne(userId, state)
  ),
  on(UsersActions.updateUser, (state, action) =>
    adapter.updateOne(action.payload, state)
  )
);

export const { selectAll } = adapter.getSelectors();

export function reducer(state: UsersState | undefined, action: Action) {
  return usersReducer(state, action);
}
