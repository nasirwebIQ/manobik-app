import { NgFor, NgIf } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { OrganizationService } from '../organization.service';

@Component({
  selector: 'app-organization-list',
  standalone: true,
  imports: [NgFor, NgIf, FormsModule],
  templateUrl: './organization-list.component.html',
  styleUrl: './organization-list.component.scss',
})
export class OrganizationListComponent {
  constructor(
    private router: Router,
    private organizationService: OrganizationService
  ) {} // Inject the service
  organizations = [
    {
      name: 'Organization 1',
      email: 'Khalid@bracits.com',
      phone: '+880 1958674857',
      head: 'Khalid Mursalin',
      userCount: 7,
      logo: 'images/org-logo.png',
      role: 'Admin',
      designation: 'Manager',
    },
    {
      name: 'Organization 2',
      email: 'Nahid@bracits.com',
      phone: '+880 1958674857',
      head: 'Nahid Ahmed',
      userCount: 10,
      logo: 'images/org-logo.png',
      role: 'Admin',
      designation: 'Manager',
    },
    {
      name: 'Organization 3',
      email: 'Shakib@bracits.com',
      phone: '+880 1958674857',
      head: 'Shakib Rahman',
      userCount: 6,
      logo: 'images/org-logo.png',
      role: 'Admin',
      designation: 'Manager',
    },
    {
      name: 'Organization 4',
      email: 'Pranto@bracits.com',
      phone: '+880 1958674857',
      head: 'Pranto Rahman',
      userCount: 9,
      logo: 'images/org-logo.png',
      role: 'Admin',
      designation: 'Manager',
    },
    {
      name: 'Organization 5',
      email: 'Taimor@bracits.com',
      phone: '+880 1958674857',
      head: 'Taimor Khan',
      userCount: 8,
      logo: 'images/org-logo.png',
      role: 'Admin',
      designation: 'Manager',
    },
    {
      name: 'Organization 6',
      email: 'Kidwa@bracits.com',
      phone: '+880 1958674857',
      head: 'Kidwa Chowdhury',
      userCount: 4,
      logo: 'images/org-logo.png',
      role: 'Admin',
      designation: 'Manager',
    },
    {
      name: 'Organization 7',
      email: 'Ahmed@bracits.com',
      phone: '+880 1958674857',
      head: 'Ahmed Hossain',
      userCount: 5,
      logo: 'images/org-logo.png',
      role: 'Admin',
      designation: 'Manager',
    },
    {
      name: 'Organization 8',
      email: 'Esmail@bracits.com',
      phone: '+880 1958674857',
      head: 'Esmail Khan',
      userCount: 3,
      logo: 'images/org-logo.png',
      role: 'Admin',
      designation: 'Manager',
    },
    {
      name: 'Organization 9',
      email: 'Samsad@bracits.com',
      phone: '+880 1958674857',
      head: 'Samsad',
      userCount: 2,
      logo: 'images/org-logo.png',
      role: 'Admin',
      designation: 'Manager',
    },
    {
      name: 'Organization 10',
      email: 'Faruque@bracits.com',
      phone: '+880 1958674857',
      head: 'Faruque Simanta',
      userCount: 1,
      logo: 'images/org-logo.png',
      role: 'Admin',
      designation: 'Manager',
    },
  ];

  // State for filters
  selectedHead: string = '';
  selectedEmail: string = ''; // Initially, show all organizations
  searchTerm: string = '';
  filteredOrganizations = [...this.organizations];

  // State for filter popup visibility
  filterPopupVisible: boolean = false;

  // Method to apply the filter
  applyFilter() {
    this.filteredOrganizations = this.organizations.filter((org) => {
      const matchesHead = this.selectedHead
        ? org.head === this.selectedHead
        : true;
      const matchesEmail = this.selectedEmail
        ? org.email === this.selectedEmail
        : true;

      // Check if the organization name includes the search term (case insensitive)
      const matchesName = org.name
        .toLowerCase()
        .includes(this.searchTerm.toLowerCase());

      // Check if the email includes the search term (case insensitive)
      const matchesEmailSearch = org.email
        .toLowerCase()
        .includes(this.searchTerm.toLowerCase());

      return (matchesName || matchesEmailSearch) && matchesHead && matchesEmail;
    });
    this.filterPopupVisible = false; // Hide the filter popup after applying
  }

  // Method to clear all filters
  clearFilter() {
    this.selectedHead = '';
    this.selectedEmail = '';
    this.filteredOrganizations = [...this.organizations]; // Reset to all organizations
    this.filterPopupVisible = false; // Hide the filter popup
  }

  // Method to toggle the filter popup
  toggleFilterPopup() {
    this.filterPopupVisible = !this.filterPopupVisible;
  }
  menuVisible: boolean[] = [];

  // Method to toggle the visibility of the action menuZ
  toggleMenu(index: number) {
    this.menuVisible[index] = !this.menuVisible[index];
  }

  // Method to view details of an organization
  viewDetails(org: any) {
    this.organizationService.setOrganizationData(org); // Pass organization data to the service
    this.router.navigate(['/organization/organization-detail']); // Navigate to the details component
    this.closeAllMenus(); // Close the menu after navigating
  }

  // Method to edit an organization
  editOrganization(org: any) {
    // Navigate to the edit component, e.g., using Angular Router
    // this.router.navigate(['/edit-organization', org.id]);
    console.log('Edit organization:', org);
    this.router.navigate(['/organization/edit-organization']);
    // Close the menu after navigating
    this.closeAllMenus();
  }

  // Method to close all menus
  closeAllMenus() {
    this.menuVisible = this.menuVisible.map(() => false);
  }
}
