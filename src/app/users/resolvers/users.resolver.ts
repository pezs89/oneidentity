import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { first, tap } from 'rxjs/operators';
import { Store, select } from '@ngrx/store';

import * as UsersActions from '../store/users.actions';
import * as fromUsers from '../store/users.selectors';
import { AppState } from 'src/app/store/app.reducer';
import { User } from '../models/user';

@Injectable({ providedIn: 'root' })
export class UsersResolver implements Resolve<User[]> {
  constructor(private store: Store<AppState>) {}

  resolve(route: ActivatedRouteSnapshot): Observable<User[]> {
    const { id } = route.params;
    return this.store.pipe(
      select(fromUsers.getAllUsers),
      tap(users => {
        if (users.length === 0 && !id) {
          this.store.dispatch(UsersActions.getUsersRequest());
        } else if (users.length === 0 && id) {
          this.store.dispatch(UsersActions.getUsersRequest());
          this.store.dispatch(UsersActions.setSelectedUserId({ userId: id }));
        } else {
          return users;
        }
      }),
      first()
    );
  }
}
