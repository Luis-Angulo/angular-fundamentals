import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { UserProfileComponent } from './user-profile/user-profile.component';
import { UserLoginComponent } from './user-login/user-login.component';

// CLI builds routes externally, this is clearer
const routes: Routes = [
  { path: 'profile', component: UserProfileComponent },
  { path: 'login', component: UserLoginComponent },
  { path: '', redirectTo: 'profile', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class UserRoutingModule {}
