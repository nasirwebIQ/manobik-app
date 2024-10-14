import { Component,inject  } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sign-in',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './sign-in.component.html',
  styleUrl: './sign-in.component.scss'
})
export class SignInComponent {
  model: any = {
    email: '',
    password: ''
  };
  private router = inject(Router); 
  onSubmit(form: NgForm){
   if(form.invalid){
    form.control.markAllAsTouched();
    console.log(form.value);
    return;
  }
  this.router.navigate(['/user-list']); 
    
   
  }
}

