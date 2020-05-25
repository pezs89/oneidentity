import { Component, OnInit } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { Observable } from 'rxjs';

import { AppState } from 'src/app/store/app.reducer';
import * as fromUsers from '../store/users.selectors';
import * as UsersActions from '../store/users.actions';

import { User } from '../models/user';
import { Router } from '@angular/router';

@Component({
  selector: 'app-users-page',
  templateUrl: './users-page.component.html',
  styleUrls: ['./users-page.component.scss'],
})
export class UsersPageComponent implements OnInit {
  users$: Observable<User[]>;

  constructor(private store: Store<AppState>, private router: Router) {}

  ngOnInit() {
    this.users$ = this.store.pipe(select(fromUsers.getAllUsers));
  }

  editUser(id: number) {
    this.store.dispatch(UsersActions.setSelectedUserId({ userId: id }));
    this.router.navigate(['/users/edit', id]);
  }
}
