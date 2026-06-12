import { Routes } from '@angular/router';
import { RegisterComponent } from './components/auth/register-component/register-component';

export const routes: Routes = [
    {path: 'register', component: RegisterComponent},
    {path: '**', redirectTo: 'register'}
];
