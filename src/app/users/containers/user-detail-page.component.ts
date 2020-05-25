import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Store, select } from '@ngrx/store';
import { Observable } from 'rxjs';

import * as fromUsers from '../store/users.selectors';
import * as UserActions from '../store/users.actions';

import { AppState } from 'src/app/store/app.reducer';
import { User } from '../models/user';

@Component({
  selector: 'app-user-detail-page',
  templateUrl: './user-detail-page.component.html',
  styleUrls: ['./user-detail-page.component.scss'],
})
export class UserDetailPageComponent implements OnInit {
  user$: Observable<User>;

  constructor(private store: Store<AppState>, private router: Router) {}

  ngOnInit() {
    this.user$ = this.store.pipe(select(fromUsers.getSelectedUser));
  }

  onUpdateUser({ id, user }) {
    this.store.dispatch(
      UserActions.updateUser({
        payload: {
          id,
          changes: user,
        },
      })
    );
  }

  onDeleteUser(id: number) {
    this.store.dispatch(UserActions.deleteUser({ userId: id }));
    this.router.navigate(['/']);
  }
}
