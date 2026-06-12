import { Component, Input } from '@angular/core';
import { ReactiveFormsModule, FormControl } from '@angular/forms';

@Component({
  selector: 'app-input',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './input-component.html',
  styleUrls: ['./input-component.css']
})
export class InputComponent {
  @Input() label = '';
  @Input() type = 'text';
  @Input() placeholder = '';
  @Input() autocomplete = '';
  @Input() control!: FormControl;
  @Input() inputId = `input-${Math.random().toString(36).slice(2, 9)}`;

  get invalid(): boolean {
    return !!this.control && this.control.invalid && (this.control.touched || this.control.dirty);
  }

  get valid(): boolean {
    return !!this.control && this.control.valid && (this.control.touched || this.control.dirty);
  }

  get feedbackMessage(): string {
    if (!this.control) return '';
    if (this.invalid) {
      if (this.control.hasError('required')) return 'Este campo es obligatorio.';
      if (this.control.hasError('email')) return 'Introduce un email válido.';
    }
    return '';
  }
}