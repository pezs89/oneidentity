import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UsersRoutingModule } from './users-routing.module';
import { UserDetailPageComponent } from './containers/user-detail-page.component';
import { UsersPageComponent } from './containers/users-page.component';

const PAGES = [UserDetailPageComponent, UsersPageComponent];

@NgModule({
  imports: [
    CommonModule,
    UsersRoutingModule,
  ],
  declarations: [...PAGES],
  providers: [],
})
export class UsersModule {}
