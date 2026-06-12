import { Component, Input } from '@angular/core';
import { ReactiveFormsModule, FormControl } from '@angular/forms';

@Component({
  selector: 'app-checkbox',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './checkbox-component.html',
  styleUrls: ['./checkbox-component.css']
})
export class CheckboxComponent {
  @Input() control!: FormControl;
}