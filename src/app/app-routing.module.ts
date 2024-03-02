
import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes, CanActivateFn } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { AboutComponent } from './pages/about/about.component';
import { ContactComponent } from './pages/contact/contact.component';
import { ProdcutComponent } from './pages/prodcut/prodcut.component';
import { ProdcutsComponent } from './pages/prodcuts/prodcuts.component';
import { NotfoundComponent } from './pages/notfound/notfound.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { LoginComponent } from './pages/login/login.component';
import { CartComponent } from './pages/cart/cart.component';
import { RegisterComponent } from './pages/register/register.component';
import { dashboardGuard } from './dashboard.guard';
const routes: Routes = [
    {path: '', component: HomeComponent },
    {path: 'home',component: HomeComponent},
    {path: 'about',component: AboutComponent},
    {path: 'login',component: LoginComponent},
    {path: 'cart',component: CartComponent},
    {path: 'register',component: RegisterComponent},
    {path: 'product',component: ProdcutComponent},
    {path: 'products',component: ProdcutsComponent},
    {path: 'dashboard',component: DashboardComponent,canActivate:[dashboardGuard]},
    {path: 'contact',component: ContactComponent},
    {path: '**',component:NotfoundComponent}


  ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
