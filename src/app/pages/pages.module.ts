import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ContactComponent } from './contact/contact.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { AboutComponent } from './about/about.component';
import { HomeComponent } from './home/home.component';
import { ProdcutsComponent } from './prodcuts/prodcuts.component';
import { ProdcutComponent } from './prodcut/prodcut.component';
import { CartComponent } from './cart/cart.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { DashboardComponent } from './dashboard/dashboard.component';


@NgModule({
  declarations: [
    AboutComponent,
    HomeComponent,
    ProdcutsComponent,
    ProdcutComponent,
    CartComponent,
    LoginComponent,
    RegisterComponent,
    DashboardComponent,
    ContactComponent,
    NotfoundComponent],
  imports: [
    CommonModule
  ]
})
export class PagesModule { }
