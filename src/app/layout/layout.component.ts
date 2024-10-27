// import { Component } from '@angular/core';
// import { RouterModule } from '@angular/router';
// import { HeaderComponent } from '../header/header.component';
// import { SidebarComponent } from '../sidebar/sidebar.component';

// @Component({
//   selector: 'app-layout',
//   standalone: true,
//   imports: [RouterModule, HeaderComponent, SidebarComponent],
//   templateUrl: './layout.component.html',
//   styleUrls: ['./layout.component.scss'], // Fix: should be styleUrls
// })
// export class LayoutComponent {}

import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HeaderComponent } from '../header/header.component';
import { SidebarComponent } from '../sidebar/sidebar.component';
import { NgClass } from '@angular/common';

@Component({
  selector: 'app-layout',
  standalone: true,
  imports: [RouterModule, HeaderComponent, SidebarComponent, NgClass],
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss'], // Fix: should be styleUrls
})
export class LayoutComponent {
  isSidebarOpen = false; // Track sidebar status

  handleSidebarToggle(isOpen: boolean) {
    this.isSidebarOpen = isOpen; // Update the layout based on sidebar status
  }
}
