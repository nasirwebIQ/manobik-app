import { NgFor } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-fivew-dashboard',
  standalone: true,
  imports: [NgFor, FormsModule],
  templateUrl: './fivew-dashboard.component.html',
  styleUrl: './fivew-dashboard.component.scss',
})
export class FivewDashboardComponent {
  searchTerm: string = '';
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
  filteredUsers() {
    const searchStr = this.searchTerm.toLowerCase();
    return this.users.filter((user) => {
      return (
        // user.no.toString().includes(searchStr) || // Check for 'no'
        user.name.toLowerCase().includes(searchStr) || // Check for user name
        user.orgname.toLowerCase().includes(searchStr) || // Check for organization name
        user.userRole.toLowerCase().includes(searchStr) || // Check for user role
        user.designation.toLowerCase().includes(searchStr) || // Check for designation
        user.email.toLowerCase().includes(searchStr) || // Check for email
        user.phone.includes(searchStr) // Check for phone
      );
    });
  }
}
