import { Component, inject, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormBuilder, Validators } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { HttpErrorResponse } from '@angular/common/http';
import { InputComponent } from '../../global/input-component/input-component';
import { PasswordInputComponent } from '../../global/password-input-component/password-input-component';
import { CheckboxComponent } from '../../global/checkbox-component/checkbox-component';
import { ButtonComponent } from '../../global/button-component/button-component';
import { AuthService } from '../../../services/auth.service';
import { LoginRequest } from '../../../models/auth.models';
import {Title} from "@angular/platform-browser";

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
    RouterLink,
    InputComponent,
    PasswordInputComponent,
    CheckboxComponent,
    ButtonComponent
  ],
  templateUrl: './login-component.html',
  styleUrls: ['./login-component.css']
})
export class LoginComponent implements OnInit {
  loading = false;
  errorMessage = '';
  successMessage = '';

  private fb = inject(FormBuilder);
  private title = inject(Title);
  private authService = inject(AuthService);
  private router = inject(Router);

  loginForm = this.fb.nonNullable.group({
    identifier: ['', [Validators.required, Validators.minLength(3)]],
    password: ['', [Validators.required]],
    remember: [false]
  });

  onSubmit(): void {
    this.errorMessage = '';
    this.successMessage = '';

    if (this.loginForm.invalid) {
      this.loginForm.markAllAsTouched();
      this.errorMessage = 'Revisa los campos antes de continuar.';
      return;
    }

    this.loading = true;

    const { identifier, password, remember } = this.loginForm.getRawValue();
    const payload: LoginRequest = { identifier, password };

    this.authService.login(payload, remember).subscribe({
      next: () => {
        this.loading = false;
        this.router.navigate(['/dashboard']);
      },
      error: (err: HttpErrorResponse) => {
        this.loading = false;
        this.errorMessage = err.status === 401
          ? 'Usuario/correo o contraseña incorrectos.'
          : 'No se ha podido iniciar sesión. Inténtalo de nuevo.';
        this.loginForm.patchValue({ password: '' });
      }
    });
  }

  ngOnInit(): void {
    this.title.setTitle('Iniciar sesión');
  }
}