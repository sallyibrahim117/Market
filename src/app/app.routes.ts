import { ProductDetailsComponent } from './components/product-details/product-details.component';
import { Routes } from '@angular/router';
import { AboutComponent } from './components/about/about.component';

export const routes: Routes = [  {path:"",redirectTo:"login",pathMatch:"full"},
    {path:'login',loadComponent:()=>import('./components/login/login.component').then(c=>c.LoginComponent)},
  {path:'home',loadComponent:()=>import('./components/home/home.component').then(c=>c.HomeComponent)},
  {path:'about',loadComponent:()=>import('./components/about/about.component').then(c=>c.AboutComponent)},
  {path:'our team',loadComponent:()=>import('./components/our-team/our-team.component').then(c=>c.OurTeamComponent)},
{path:'details/:id',loadComponent:()=>import('./components/product-details/product-details.component').
  then(c=>c.ProductDetailsComponent)},
  {path:'users',loadComponent:()=>import('./components/users/users.component').then(c=>c.UsersComponent)},


];
