import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PagesModule } from './pages/pages.module';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { ServiceModule } from './service/service.module';
import { MaterialModule } from './material/material.module';




@NgModule({
  declarations: [AppComponent, HeaderComponent, FooterComponent,],
  imports: [
    BrowserModule,
    AppRoutingModule,
    PagesModule,
    ServiceModule,
    MaterialModule
  ],
  providers: [
    provideClientHydration()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
