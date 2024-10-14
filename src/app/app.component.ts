import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { SignInComponent } from './sign-in/sign-in.component';
import { FormsModule } from '@angular/forms';
import { UserListComponent } from "./user-list/user-list.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, SignInComponent, FormsModule, UserListComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'manobik-app';
}
