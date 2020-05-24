import { Injectable } from '@angular/core';
import { CanActivate } from '@angular/router';
import { Observable, of } from 'rxjs';
import { first, switchMap, map } from 'rxjs/operators';
import { Store, select } from '@ngrx/store';

import * as UsersActions from '../store/users.actions';
import * as fromUsers from '../store/users.reducer';
import { AppState } from 'src/app/store/app.reducer';

@Injectable({ providedIn: 'root' })
export class UsersGuard implements CanActivate {
  constructor(private store: Store<AppState>) {}

  canActivate(): Observable<boolean> {
    return this.isLoaded().pipe(switchMap(loaded => of(loaded)));
  }

  private isLoaded() {
    return this.store.pipe(
      select(fromUsers.getAllUsers),
      map(users => {
        if (!users.length) {
          this.store.dispatch(UsersActions.getUsersRequest());
          return true;
        } else {
          return false;
        }
      }),
      first()
    );
  }
}
