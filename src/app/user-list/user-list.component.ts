import { NgIf } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-user-list',
  standalone: true,
  imports: [NgIf],
  templateUrl: './user-list.component.html',
  styleUrl: './user-list.component.scss'
})
export class UserListComponent {
     isModalOpen = false; 
    // Method to open the modal
    openFilterModal() {
      console.log("click");
      this.isModalOpen = true;
    }
    closeModal() {
      this.isModalOpen = false;
    }
  
    // Method to close the modal
    // closeModal() {
    //   this.isModalOpen = false;
    // }

}
