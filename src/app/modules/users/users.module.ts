import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppRoutingModule } from 'src/app/app-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { UserlistComponent } from './components/userlist/userlist.component';
import { UserprofileComponent } from './components/userprofile/userprofile.component';
import { UsersignupComponent } from './components/usersignup/usersignup.component';
import { UserupdateComponent } from './components/userupdate/userupdate.component';
import { UserloginComponent } from './components/userlogin/userlogin.component';

@NgModule({
  imports: [
    CommonModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  declarations: [UserlistComponent, UserprofileComponent, UsersignupComponent, UserupdateComponent, UserloginComponent]
})
export class UsersModule { }
