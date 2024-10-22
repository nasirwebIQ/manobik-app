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
import { ResponsiveComponent } from './responsive/responsive.component';
import { OrganizationDetailComponent } from './organization-details/organization-details.component';
import { EditOrganizationComponent } from './edit-organization/edit-organization.component';

export const routes: Routes = [
  { path: '', redirectTo: '/sign-in', pathMatch: 'full' },
  { path: 'sign-in', component: SignInComponent, data: { title: 'Sign In' } },
  {
    path: 'forgot-password',
    component: ForgotPasswordComponent,
    data: { title: 'Forgot Password' },
  },
  {
    path: 'successful',
    component: LoginSuccesfullComponent,
    data: { title: 'Login Successful' },
  },
  {
    path: 'resposive',
    component: ResponsiveComponent,
    data: { title: 'Responsive Design' },
  },
  {
    path: 'organization',
    component: LayoutComponent,
    children: [
      {
        path: '',
        component: OrganizationListComponent,
        data: { title: 'Organization' },
      },
      {
        path: 'organization-detail', // :id is the parameter
        component: OrganizationDetailComponent,
        data: { title: 'Organization Details' },
      },
      {
        path: 'edit-organization',
        component: EditOrganizationComponent,
        data: { title: 'Edit Organization' },
      },
    ],
  },
  {
    path: 'profile',
    component: LayoutComponent,
    children: [
      { path: '', component: ProfileComponent, data: { title: 'Profile' } },
    ],
  },
  {
    path: 'fivew-form',
    component: LayoutComponent,
    children: [
      {
        path: '',
        component: FivewDashboardComponent,
        data: { title: '5W Form' },
      },
    ],
  },
  {
    path: 'plan-list',
    component: LayoutComponent,
    children: [
      {
        path: '',
        component: PlanListDashboardComponent,
        data: { title: 'Plan List' },
      },
      {
        path: 'plan-detail',
        component: PlanDetailsComponent,
        data: { title: 'Plan Details' },
      },
    ],
  },
  {
    path: 'user-list',
    component: LayoutComponent,
    children: [
      {
        path: '',
        component: UserDashboardComponent,
        data: { title: 'User List' },
      },
      {
        path: 'create-user',
        component: CreateUserComponent,
        data: { title: 'Create User' },
      },
      {
        path: 'reset-pass',
        component: ResetPasswordComponent,
        data: { title: 'Reset Password' },
      },
    ],
  },
];
