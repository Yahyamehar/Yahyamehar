import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
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
    ReactiveFormsModule
  ],
  templateUrl: './addform.component.html',
  styleUrl: './addform.component.css',
})
export class AddformComponent {
  form: FormGroup;

  constructor(private fb: FormBuilder, private router: Router) {
    this.form = this.fb.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      phone: ['', Validators.required],
      membership: ['', Validators.required]
    });
  }

  onSubmit() {
    if (this.form.valid) {
      this.router.navigate(['/formsubmit']);
    } else {
      this.form.markAllAsTouched();
    }
  }
}
