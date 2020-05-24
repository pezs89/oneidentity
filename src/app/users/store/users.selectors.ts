import { createFeatureSelector, createSelector } from '@ngrx/store';
import { UsersState, selectAll } from './users.reducer';

export const getUsersState = createFeatureSelector<UsersState>('users');

export const getAllUsers = createSelector(getUsersState, selectAll);

export const getSelectedUserId = createSelector(
  getUsersState,
  state => state.selectedUserId
);

export const getSelectedUser = createSelector(
  getUsersState,
  getSelectedUserId,
  (users, userId) => users.entities[userId]
);
