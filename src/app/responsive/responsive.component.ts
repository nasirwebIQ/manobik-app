import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-responsive',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './responsive.component.html',
  styleUrl: './responsive.component.scss',
})
export class ResponsiveComponent {
  nam: string = '';
  pas: string = '';
}
