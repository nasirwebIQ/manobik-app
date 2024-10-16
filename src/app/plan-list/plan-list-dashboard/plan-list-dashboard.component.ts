import { NgFor } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-plan-list-dashboard',
  standalone: true,
  imports: [NgFor],
  templateUrl: './plan-list-dashboard.component.html',
  styleUrl: './plan-list-dashboard.component.scss',
})
export class PlanListDashboardComponent {
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
      location: 'Badda Ghudaragat,Badda,Dhaka-1212',
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
}
