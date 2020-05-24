import { Injectable } from '@angular/core';
import { Actions, ofType, createEffect } from '@ngrx/effects';
import { map, concatMap } from 'rxjs/operators';

import { UsersService } from '../services/users.service';
import * as UsersActions from './users.actions';

@Injectable()
export class UsersEffects {
  loadUsers$ = createEffect(() =>
    this.actions$.pipe(
      ofType(UsersActions.getUsersRequest),
      concatMap(() =>
        this.usersService
          .getUsers()
          .pipe(map((users) => UsersActions.getUsersSuccess({ users })))
      )
    )
  );

  constructor(private actions$: Actions, private usersService: UsersService) {}
}
