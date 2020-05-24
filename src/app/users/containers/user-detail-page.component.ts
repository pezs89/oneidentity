import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  Validators,
  AbstractControl,
} from '@angular/forms';
import { Router } from '@angular/router';
import { Store, select } from '@ngrx/store';

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
  user: User;
  userForm: FormGroup;
  userFields: string[];

  get addressFieldsGroup(): AbstractControl {
    return this.userForm.get('address');
  }

  get companyFieldsGroup(): AbstractControl {
    return this.userForm.get('company');
  }

  constructor(
    private store: Store<AppState>,
    private fb: FormBuilder,
    private router: Router
  ) {}

  ngOnInit() {
    this.store.pipe(select(fromUsers.getSelectedUser)).subscribe(user => {
      if (user) {
        this.user = user;
        this.userForm = this.fb.group(this.createForm<User>(user));
      }
    });
  }

  submitForm() {
    this.store.dispatch(
      UserActions.updateUser({
        payload: {
          id: this.user.id,
          changes: this.userForm.value,
        },
      })
    );
  }

  deleteUser() {
    this.store.dispatch(UserActions.deleteUser({ userId: this.user.id }));
    this.router.navigate(['/']);
  }

  private createForm<T>(data: T): FormGroup {
    return Object.keys(data).reduce((group, key) => {
      if (typeof data[key] === 'string') {
        group[key] = this.fb.control(data[key], Validators.required);
      } else if (typeof data[key] === 'object') {
        group[key] = this.fb.group(this.createForm(data[key]));
      }
      return group;
    }, {}) as FormGroup;
  }
}
