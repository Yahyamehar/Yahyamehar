import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import {
  RouterOutlet,
  RouterLink,
  RouterLinkActive,
  Router,
} from '@angular/router';

@Component({
  selector: 'app-addform',
  standalone: true,
  imports: [
    RouterOutlet,
    RouterLink,
    RouterLinkActive,
    CommonModule,
    FormsModule,
  ],
  templateUrl: './addform.component.html',
  styleUrl: './addform.component.css',
})
export class AddformComponent {
  constructor(private router: Router) {}

  onSubmit() {
    console.log('form submitted');
    this.router.navigate(['/formsubmit']);
  }
}
