import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserDetailPageComponent } from './containers/user-detail-page.component';
import { UsersPageComponent } from './containers/users-page.component';
import { UsersGuard } from './guards/users.guard';

const routes: Routes = [
  {
    path: '',
    component: UsersPageComponent,
    canActivate: [UsersGuard],
  },
  {
    path: 'edit/:id',
    component: UserDetailPageComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class UsersRoutingModule {}
