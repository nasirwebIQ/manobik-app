import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SignInComponent } from './sign-in/sign-in.component'; // Adjust the path as needed
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';
import { OrganizationListComponent } from './organization-list/organization-list.component';

export const routes: Routes = [
  { path: '', redirectTo: '/sign-in', pathMatch: 'full' },
  { path: 'sign-in', component: SignInComponent },
  {path: 'organization', component: OrganizationListComponent},
  {path: "forgot-password", component: ForgotPasswordComponent}
];
