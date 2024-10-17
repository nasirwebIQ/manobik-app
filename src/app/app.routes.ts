import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SignInComponent } from './sign-in/sign-in.component'; // Adjust the path as needed
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';
import { OrganizationListComponent } from './organization-list/organization-list.component';
import { LayoutComponent } from './layout/layout.component';
import { ProfileComponent } from './profile/profile.component';
import { FivewDashboardComponent } from './fivew-form/fivew-dashboard/fivew-dashboard.component';
import { PlanListDashboardComponent } from './plan-list/plan-list-dashboard/plan-list-dashboard.component';
import { PlanDetailsComponent } from './plan-list/plan-details/plan-details.component';
import { UserDashboardComponent } from './user-list/user-dashboard/user-dashboard.component';
import { CreateUserComponent } from './user-list/create-user/create-user.component';
import { ResetPasswordComponent } from './user-list/reset-password/reset-password.component';
import { LoginSuccesfullComponent } from './login-succesfull/login-succesfull.component';

export const routes: Routes = [
  { path: '', redirectTo: '/sign-in', pathMatch: 'full' },
  { path: 'sign-in', component: SignInComponent },
  { path: 'forgot-password', component: ForgotPasswordComponent },
  { path: 'successful', component: LoginSuccesfullComponent },
  {
    path: 'organization',
    component: LayoutComponent,
    children: [{ path: '', component: OrganizationListComponent }],
  },
  {
    path: 'profile',
    component: LayoutComponent,
    children: [{ path: '', component: ProfileComponent }],
  },
  {
    path: 'fivew-form',
    component: LayoutComponent,
    children: [{ path: '', component: FivewDashboardComponent }],
  },

  {
    path: 'plan-list',
    component: LayoutComponent,
    children: [
      { path: '', component: PlanListDashboardComponent },
      { path: 'plan-detail', component: PlanDetailsComponent },
    ],
  },
  {
    path: 'user-list',
    component: LayoutComponent,
    children: [
      { path: '', component: UserDashboardComponent },
      { path: 'create-user', component: CreateUserComponent },
      { path: 'reset-pass', component: ResetPasswordComponent },
    ],
  },
];
