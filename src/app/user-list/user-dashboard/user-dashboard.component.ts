import { NgFor, CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user-dashboard',
  standalone: true,
  imports: [NgFor, CommonModule],
  templateUrl: './user-dashboard.component.html',
  styleUrl: './user-dashboard.component.scss',
})
export class UserDashboardComponent {
  users = [
    {
      name: 'Khalid',
      orgname: 'BracIt',
      userRole: 'Software Engineer',
      designation: 'Engineer',
      email: 'Khalid@bracits.com',
      phone: '+880 1958674857',
      head: 'Khalid Mursalin',
      userCount: 7,
      logo: 'images/user-avatar.png',
    },
    {
      name: 'Nahid ',
      orgname: 'BracIt',
      userRole: 'Software Engineer',
      designation: 'Engineer',
      email: 'Nahid@bracits.com',
      phone: '+880 1958674857',
      head: 'Nahid Ahmed',
      userCount: 10,
      logo: 'images/user-avatar.png',
    },
    {
      name: 'Shakib ',
      orgname: 'BracIt',
      userRole: 'Software Engineer',
      designation: 'Engineer',
      email: 'Shakib@bracits.com',
      phone: '+880 1958674857',
      head: 'Shakib Rahman',
      userCount: 6,
      logo: 'images/user-avatar.png',
    },
    {
      name: 'Pranto ',
      orgname: 'BracIt',
      userRole: 'Software Engineer',
      designation: 'Engineer',
      email: 'Pranto@bracits.com',
      phone: '+880 1958674857',
      head: 'Pranto Rahman',
      userCount: 9,
      logo: 'images/user-avatar.png',
    },
    {
      name: 'Taimor ',
      orgname: 'BracIt',
      userRole: 'Software Engineer',
      designation: 'Engineer',
      email: 'Taimor@bracits.com',
      phone: '+880 1958674857',
      head: 'Taimor Khan',
      userCount: 8,
      logo: 'images/user-avatar.png',
    },
    {
      name: 'Kidwa ',
      orgname: 'BracIt',
      userRole: 'Software Engineer',
      designation: 'Engineer',
      email: 'Kidwa@bracits.com',
      phone: '+880 1958674857',
      head: 'Kidwa Chowdhury',
      userCount: 4,
      logo: 'images/user-avatar.png',
    },
    {
      name: 'Ahmed ',
      orgname: 'BracIt',
      userRole: 'Software Engineer',
      designation: 'Engineer',
      email: 'Ahmed@bracits.com',
      phone: '+880 1958674857',
      head: 'Ahmed Hossain',
      userCount: 5,
      logo: 'images/user-avatar.png',
    },
    {
      name: 'Esmail ',
      orgname: 'BracIt',
      userRole: 'Software Engineer',
      designation: 'Engineer',
      email: 'Esmail@bracits.com',
      phone: '+880 1958674857',
      head: 'Esmail Khan',
      userCount: 3,
      logo: 'images/user-avatar.png',
    },
    {
      name: 'Samsad ',
      orgname: 'BracIt',
      userRole: 'Software Engineer',
      designation: 'Engineer',
      email: 'Samsad@bracits.com',
      phone: '+880 1958674857',
      head: 'Samsad',
      userCount: 2,
      logo: 'images/user-avatar.png',
    },
    {
      name: 'Faruque ',
      orgname: 'BracIt',
      userRole: 'Software Engineer',
      designation: 'Engineer',
      email: 'Faruque@bracits.com',
      phone: '+880 1958674857',
      head: 'Faruque Simanta',
      userCount: 1,
      logo: 'images/user-avatar.png',
    },
  ];
  constructor(private router: Router) {}
  cretarUser() {
    this.router.navigate(['/user-list/create-user']);
  }
}