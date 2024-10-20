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

import { Component, EventEmitter, Output } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [RouterModule, CommonModule],
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss'], // Fix: should be styleUrls
})
export class SidebarComponent {
  @Output() sidebarToggle = new EventEmitter<boolean>();
  sidebarOpen = false;

  changeSidebarStatus() {
    this.sidebarOpen = !this.sidebarOpen;
    this.sidebarToggle.emit(this.sidebarOpen); // Emit the new status
    console.log('Sidebar status changed:', this.sidebarOpen);
  }
}
