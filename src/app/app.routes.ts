import { Routes } from '@angular/router';
import { SignupComponent } from './signup-component/signup-component';
import { Login } from './login/login';

export const routes: Routes = [
  { path: 'signup', component: SignupComponent },
  { path: 'login', component: Login },
  { path: '', redirectTo: 'signup', pathMatch: 'full' }
];                                              