import { Component, Input } from '@angular/core';
import { ReactiveFormsModule, FormControl } from '@angular/forms';

@Component({
  selector: 'app-password-input',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './password-input-component.html',
  styleUrls: ['./password-input-component.css']
})
export class PasswordInputComponent {
  @Input() label = '';
  @Input() placeholder = '';
  @Input() control!: FormControl;
  @Input() inputId = `pass-${Math.random().toString(36).slice(2, 9)}`;
  showPassword = false;

  togglePassword(): void {
    this.showPassword = !this.showPassword;
  }

  get invalid(): boolean {
    return !!this.control && this.control.invalid && (this.control.touched || this.control.dirty);
  }

  get valid(): boolean {
    return !!this.control && this.control.valid && (this.control.touched || this.control.dirty);
  }

  get feedbackMessage(): string {
    if (!this.control) return '';
    if (this.invalid && this.control.hasError('minlength')) return 'Mínimo 8 caracteres.';
    return '';
  }
}