import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SignInComponent } from './sign-in/sign-in.component'; // Adjust the path as needed
import { UserListComponent } from './user-list/user-list.component';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';

export const routes: Routes = [
 { path: '', redirectTo: '/sign-in', pathMatch: 'full' },
  { path: 'sign-in', component: SignInComponent },
  { path: 'user-list', component: UserListComponent },
  {path: "forgot-password", component: ForgotPasswordComponent}
];
