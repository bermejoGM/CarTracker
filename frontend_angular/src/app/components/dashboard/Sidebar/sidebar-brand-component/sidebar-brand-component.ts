import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-sidebar-brand',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './sidebar-brand-component.html',
  styleUrls: ['./sidebar-brand-component.css']
})
export class SidebarBrandComponent {}