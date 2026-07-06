import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { NavigationEnd, Router, RouterModule } from '@angular/router';
import { filter } from 'rxjs/operators';
import { SidebarBrandComponent } from '../sidebar-brand-component/sidebar-brand-component';
import { SidebarNavComponent } from '../sidebar-nav-component/sidebar-nav-component';
import { SidebarUserComponent } from '../sidebar-user-component/sidebar-user-component';

interface SidebarItem {
  label: string;
  link: string;
  icon: string;
  exact: boolean;
}

@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [CommonModule, RouterModule, SidebarBrandComponent, SidebarNavComponent, SidebarUserComponent],
  templateUrl: './sidebar-component.html',
  styleUrls: ['./sidebar-component.css']
})
export class SidebarComponent {
  mobileOpen = false;
  currentUrl = '';

  menuItems: SidebarItem[] = [
    { label: 'Dashboard', link: '/dashboard', icon: 'dashboard', exact: true },
    { label: 'Vehículos', link: '/vehicles', icon: 'vehicles', exact: false },
    { label: 'Gastos', link: '/expenses', icon: 'expenses', exact: false },
    { label: 'Repostajes', link: '/fueling', icon: 'fuel', exact: false },
    { label: 'Mantenimientos', link: '/maintenance', icon: 'maintenance', exact: false },
    { label: 'Averías', link: '/breakdowns', icon: 'breakdowns', exact: false },
    { label: 'Documentación', link: '/documents', icon: 'documents', exact: false },
    { label: 'Estadísticas', link: '/analytics', icon: 'analytics', exact: false },
    { label: 'Modo Venta', link: '/sales', icon: 'sales', exact: false }
  ];

  constructor(private router: Router) {
    this.currentUrl = this.router.url;

    this.router.events
      .pipe(filter(event => event instanceof NavigationEnd))
      .subscribe((event: NavigationEnd) => {
        this.currentUrl = event.urlAfterRedirects;
        this.mobileOpen = false;
      });
  }


  isActive(link: string): boolean {
    return this.currentUrl === link || this.currentUrl.startsWith(link + '/');
  }
}