import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import {
  FontAwesomeModule,
  FaIconLibrary,
} from '@fortawesome/angular-fontawesome';
import { faEdit } from '@fortawesome/free-solid-svg-icons';

import { SharedModule } from '../shared/shared.module';
import { UsersRoutingModule } from './users-routing.module';
import { UserDetailPageComponent } from './containers/user-detail-page.component';
import { UsersPageComponent } from './containers/users-page.component';
import { UserFormComponent } from './components/user-form/user-form.component';

import * as fromUsers from './store/users.reducer';
import { UsersEffects } from './store/users.effects';
import { UserCardComponent } from './components/user-card/user-card.component';
import { UserActionComponent } from './components/user-card-actions.ts/user-action.component';

const PAGES = [UserDetailPageComponent, UsersPageComponent];
const COMPONENTS = [UserCardComponent, UserActionComponent, UserFormComponent];

@NgModule({
  imports: [
    CommonModule,
    UsersRoutingModule,
    ReactiveFormsModule,
    SharedModule,
    StoreModule.forFeature('users', fromUsers.reducer),
    EffectsModule.forFeature([UsersEffects]),
    FontAwesomeModule,
  ],
  declarations: [PAGES, COMPONENTS],
})
export class UsersModule {
  constructor(private library: FaIconLibrary) {
    library.addIcons(faEdit);
  }
}
