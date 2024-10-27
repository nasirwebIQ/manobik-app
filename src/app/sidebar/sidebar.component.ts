// import { Component } from '@angular/core';
// import { RouterModule } from '@angular/router';
// import { CommonModule } from '@angular/common';

// @Component({
//   selector: 'app-sidebar',
//   standalone: true,
//   imports: [RouterModule, CommonModule],
//   templateUrl: './sidebar.component.html',
//   styleUrl: './sidebar.component.scss',
// })
// export class SidebarComponent {
//   sidebarOpen = false;

//   changeSidebarStatus() {
//     this.sidebarOpen = !this.sidebarOpen;
//     console.log('Sidebar status changed:', this.sidebarOpen);
//   }
// }

import { Component, EventEmitter, Output, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [RouterModule, CommonModule],
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss'], // Fix: should be styleUrls
})
export class SidebarComponent implements OnInit {
  @Output() sidebarToggle = new EventEmitter<boolean>();

  sidebarOpen = false; // Default value

  ngOnInit() {
    // Load the sidebar state from localStorage on component initialization
    const savedSidebarState = localStorage.getItem('sidebarOpen');
    this.sidebarOpen = savedSidebarState === 'true'; // Convert string to boolean
    console.log('Loaded sidebar state:', this.sidebarOpen);
    this.sidebarToggle.emit(this.sidebarOpen);
  }
  changeSidebarStatus() {
    this.sidebarOpen = !this.sidebarOpen; // Toggle the sidebar state
    localStorage.setItem('sidebarOpen', String(this.sidebarOpen)); // Save the new state to local storage
    this.sidebarToggle.emit(this.sidebarOpen); // Emit the new status
    console.log('Sidebar status changed:', this.sidebarOpen); // Log the new status
  }
}
