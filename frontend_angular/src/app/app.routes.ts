import { Routes } from '@angular/router';
import { RegisterComponent } from './components/auth/register-component/register-component';
import { LoginComponent } from './components/auth/login-component/login-component';
import { SidebarComponent } from './components/dashboard/Sidebar/sidebar-component/sidebar-component';

export const routes: Routes = [
    {path: 'register', component: RegisterComponent},
    {path: 'login', component: LoginComponent},
    {path: 'dashboard', component: SidebarComponent},
    {path: '**', redirectTo: 'login', pathMatch: 'full'}
];