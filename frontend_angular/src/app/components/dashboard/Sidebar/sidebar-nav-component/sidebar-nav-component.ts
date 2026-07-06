import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, RouterModule, NavigationEnd } from '@angular/router';
import { filter } from 'rxjs/operators';

export interface SidebarItem {
  label: string;
  link: string;
  icon?: string;
  exact?: boolean;
}

@Component({
  selector: 'app-sidebar-nav',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './sidebar-nav-component.html',
  styleUrls: ['./sidebar-nav-component.css'],
})
export class SidebarNavComponent {
  @Input() menuItems: SidebarItem[] = [];
  @Output() navigate = new EventEmitter<void>();

  currentUrl = '';

  constructor(private router: Router) {
    this.currentUrl = this.router.url;
    this.router.events
      .pipe(filter((event) => event instanceof NavigationEnd))
      .subscribe((event: NavigationEnd) => {
        this.currentUrl = event.urlAfterRedirects;
      });
  }

  isActive(link: string | undefined, exact = false): boolean {
    if (!link) return false;
    if (exact) return this.currentUrl === link;
    return this.currentUrl === link || this.currentUrl.startsWith(link + '/');
  }

  onLinkClick(): void {
    this.navigate.emit();
  }

  trackByLink(index: number, item: SidebarItem) {
    return item.link;
  }
}
