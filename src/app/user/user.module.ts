import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { UserRoutingModule } from './user-routing.module';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { UserLoginComponent } from './user-login/user-login.component';

@NgModule({
  declarations: [UserProfileComponent, UserLoginComponent],
  imports: [CommonModule, UserRoutingModule, FormsModule],
})
export class UserModule {}
