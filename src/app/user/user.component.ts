import { Component } from '@angular/core';

@Component({
  selector: 'app-user',
  standalone: true,
  imports: [],
  templateUrl: './user.component.html',
  styleUrl: './user.component.scss'
})
export class UserComponent {
  users = [
    { name: 'Khalid',orgname:"BracIt", userRole: 'Software Engineer', designation:"Engineer",email: 'mailto:khalid@bracits.com',phone: '+880 1958674857', head: 'Khalid Mursalin', userCount: 7, logo: 'assets/images/user-avatar.png' },
    { name: 'Nahid ',orgname:"BracIt", userRole: 'Software Engineer', designation:"Engineer",email: 'mailto:nahid@bracits.com',phone: '+880 1958674857', head: 'Nahid Ahmed', userCount: 10, logo: 'assets/images/user-avatar.png' },
    { name: 'Shakib ',orgname:"BracIt", userRole: 'Software Engineer',designation:"Engineer",email: 'mailto:shakib@bracits.com', phone: '+880 1958674857', head: 'Shakib Rahman', userCount: 6, logo: 'assets/images/user-avatar.png' },
    { name: 'Pranto ',orgname:"BracIt", userRole: 'Software Engineer', designation:"Engineer",email: 'mailto:pranto@bracits.com',phone: '+880 1958674857', head: 'Pranto Rahman', userCount: 9, logo: 'assets/images/user-avatar.png' },
    { name: 'Taimor ',orgname:"BracIt", userRole: 'Software Engineer',designation:"Engineer",email: 'mailto:taimor@bracits.com',  phone: '+880 1958674857', head: 'Taimor Khan', userCount: 8, logo: 'assets/images/user-avatar.png'},
    { name: 'Kidwa ',orgname:"BracIt", userRole: 'Software Engineer', designation:"Engineer",email: 'mailto:kidwa@bracits.com',phone: '+880 1958674857', head: 'Kidwa Chowdhury', userCount: 4, logo: 'assets/images/user-avatar.png' },
    { name: 'Ahmed ',orgname:"BracIt", userRole: 'Software Engineer', designation:"Engineer",email: 'mailto:ahmed@bracits.com',phone: '+880 1958674857', head: 'Ahmed Hossain', userCount: 5, logo: 'assets/images/user-avatar.png' },
    { name: 'Esmail ',orgname:"BracIt", userRole: 'Software Engineer',designation:"Engineer",email: 'mailto:esmail@bracits.com', phone: '+880 1958674857', head: 'Esmail Khan', userCount: 3, logo: 'assets/images/user-avatar.png' },
    { name: 'Samsad ',orgname:"BracIt", userRole: 'Software Engineer',designation:"Engineer", email: 'mailto:samsad@bracits.com',phone: '+880 1958674857', head: 'Samsad', userCount: 2, logo: 'assets/images/user-avatar.png' },
    { name: 'Faruque ',orgname:"BracIt", userRole: 'Software Engineer',designation:"Engineer",  email: 'mailto:faruque@bracits.com',phone: '+880 1958674857', head: 'Faruque Simanta', userCount: 1, logo: 'assets/images/user-avatar.png' },
  ];

}
