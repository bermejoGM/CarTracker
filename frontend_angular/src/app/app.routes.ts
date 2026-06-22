import { Routes } from '@angular/router';
import { RegisterComponent } from './components/auth/register-component/register-component';
import { LoginComponent } from './components/auth/login-component/login-component';

export const routes: Routes = [
    {path: 'register', component: RegisterComponent},
    {path: 'login', component: LoginComponent},
    {path: '**', redirectTo: 'login', pathMatch: 'full'}
];