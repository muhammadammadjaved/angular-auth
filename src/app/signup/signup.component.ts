import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { AuthService } from '../auth.service';
// declare var google:any;

@Component({
  selector: 'app-signup',
  standalone: true,
  imports: [FormsModule, ReactiveFormsModule, CommonModule],
  templateUrl: './signup.component.html',
  styleUrl: './signup.component.css',
})
export class SignupComponent {
  signupForm!: FormGroup;
  errorMessage: string = '';

  constructor(private fb: FormBuilder, private service: AuthService) {}

  ngOnInit() {
    this.signupForm = this.fb.group({
      fullName: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required],
    });
  }

  onSubmit() {
    this.service.post('api/signup', this.signupForm.value).subscribe(
      (response: any) => {
        console.log(response);
      },
      (error: any) => {
        // Handle error if needed
        console.error(error);
      }
    );
  }

  googleSignup() {}
}
