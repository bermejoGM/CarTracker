import { Component, inject, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  ReactiveFormsModule,
  FormBuilder,
  Validators,
  AbstractControl,
  ValidationErrors,
  ValidatorFn,
} from '@angular/forms';
import { RouterLink } from '@angular/router';
import { InputComponent } from '../../global/input-component/input-component';
import { PasswordInputComponent } from '../../global/password-input-component/password-input-component';
import { CheckboxComponent } from '../../global/checkbox-component/checkbox-component';
import { ButtonComponent } from '../../global/button-component/button-component';
import { AuthService } from '../../../services/auth.service';
@Component({
  selector: 'app-register',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
    RouterLink,
    InputComponent,
    PasswordInputComponent,
    CheckboxComponent,
    ButtonComponent,
  ],
  templateUrl: './register-component.html',
  styleUrls: ['./register-component.css'],
})
export class RegisterComponent {
  loading = false;
  successMessage = '';
  errorMessage = '';

  private fb = inject(FormBuilder);
  private authService = inject(AuthService);

  registerForm = this.fb.group(
    {
      name: ['', [Validators.required, Validators.minLength(3)]],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(8)]],
      confirmPassword: ['', [Validators.required]],
      terms: [false, [Validators.requiredTrue]],
    },
    { validators: this.passwordMatchValidator() },
  );

  passwordMatchValidator(): ValidatorFn {
    return (control: AbstractControl): ValidationErrors | null => {
      const password = control.get('password')?.value;
      const confirmPassword = control.get('confirmPassword')?.value;

      if (!password || !confirmPassword) {
        return null;
      }

      return password === confirmPassword ? null : { passwordMismatch: true };
    };
  }

  get passwordMismatch(): boolean {
    return (
      this.registerForm.hasError('passwordMismatch') &&
      (this.registerForm.controls.confirmPassword.touched ||
        this.registerForm.controls.confirmPassword.dirty)
    );
  }

  onSubmit(): void {
    this.registerForm.markAllAsTouched();
    this.successMessage = '';
    this.errorMessage = '';

    if (this.registerForm.invalid) return;

    this.loading = true;

    const { name, email, password } = this.registerForm.getRawValue();

    this.authService
      .register({
        nombre: name ?? '',
        email: email ?? '',
        password: password ?? '',
      })
      .subscribe({
        next: () => {
          this.successMessage = 'Usuario registrado correctamente. Ya puedes iniciar sesión.';
          this.errorMessage = '';

          this.registerForm.reset({
            name: '',
            email: '',
            password: '',
            confirmPassword: '',
            terms: false,
          });

          this.loading = false;
        },
        error: (error) => {
          this.successMessage = '';
          if (error?.status === 409) {
            const backendMessage = error?.error?.message?.toLowerCase?.() ?? '';

            if (backendMessage.includes('username') ||
              backendMessage.includes('nombre de usuario')
            ) {
              this.errorMessage = 'Nombre de usuario en uso.';
            }
             else {
              this.errorMessage = 'El correo electrónico ya está registrado.';
            }

          } else {
            this.errorMessage = 'Ha habido un error. Inténtalo de nuevo.';
          }

          this.registerForm.reset({
            name: '',
            email: '',
            password: '',
            confirmPassword: '',
            terms: false,
          });

          this.loading = false;
        },
      });
  }
}
