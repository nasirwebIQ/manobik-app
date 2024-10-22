import { NgFor } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-plan-list-dashboard',
  standalone: true,
  imports: [NgFor, FormsModule],
  templateUrl: './plan-list-dashboard.component.html',
  styleUrl: './plan-list-dashboard.component.scss',
})
export class PlanListDashboardComponent {
  searchTerm = '';
  users = [
    {
      name: 'Khalid',
      phone: '+880 1958674857',
      submission_date: 'May22,2024',
      location: 'Badda Ghudaragat,Badda,Dhaka-1212',
      logo: 'images/user-avatar.png',
    },
    {
      name: 'Nahid ',
      phone: '+880 1958674857',
      submission_date: 'May22,2024',
      location: 'Badda Ghudaragat,Badda,Dhaka-1212',
      logo: 'images/user-avatar.png',
    },
    {
      name: 'Shakib ',
      phone: '+880 1958674857',
      submission_date: 'May22,2024',
      location: 'Badda Ghudaragat,Badda,Dhaka-1212',
      logo: 'images/user-avatar.png',
    },
    {
      name: 'Pranto ',
      phone: '+880 1958674857',
      submission_date: 'May22,2024',
      location: 'Badda Ghudaragat,Badda,Dhaka-1212',
      logo: 'images/user-avatar.png',
    },
    {
      name: 'Taimor ',
      phone: '+880 1958674857',
      submission_date: 'May22,2024',
      location: 'Badda Ghudaragat,Badda,Dhaka-1212',
      logo: 'images/user-avatar.png',
    },
    {
      name: 'Kidwa ',
      phone: '+880 1958674857',
      submission_date: 'May22,2024',
      location: 'Badda Ghudaragat,Badda,Dhaka-1212',
      logo: 'images/user-avatar.png',
    },
    {
      name: 'Ahmed ',
      phone: '+880 1958674857',
      submission_date: 'May22,2024',
      location: 'Badda Ghudaragat,Badda,Dhaka-1212',
      logo: 'images/user-avatar.png',
    },
    {
      name: 'Esmail ',
      phone: '+880 1958674857',
      submission_date: 'May22,2024',
      location: 'Badda Ghudaragat,Badda,Dhaka-1213',
      logo: 'images/user-avatar.png',
    },
    {
      name: 'Samsad ',
      phone: '+880 1958674857',
      submission_date: 'May22,2024',
      location: 'Badda Ghudaragat,Badda,Dhaka-1212',
      logo: 'images/user-avatar.png',
    },
    {
      name: 'Faruque ',
      phone: '+880 1958674857',
      submission_date: 'May22,2024',
      location: 'Badda Ghudaragat,Badda,Dhaka-1212',
      logo: 'images/user-avatar.png',
    },
  ];
  filteredUsers() {
    const searchStr = this.searchTerm.toLowerCase();
    return this.users.filter((user) => {
      return (
        // user.no.toString().includes(searchStr) || // Check for 'no'
        user.name.toLowerCase().includes(searchStr) || // Check for user name
        user.submission_date.toLowerCase().includes(searchStr) || // Check for organization name
        user.location.toLowerCase().includes(searchStr) || // Check for user role
        user.phone.includes(searchStr) // Check for phone
      );
    });
  }
}
