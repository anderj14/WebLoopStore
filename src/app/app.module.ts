import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './sharepages/navbar/navbar.component';
import { FooterComponent } from './sharepages/footer/footer.component';
import { AboutComponent } from './pages/about/about.component';
import { EventsComponent } from './pages/events/events.component';
import { ProductsComponent } from './pages/products/products.component';
import { SupportComponent } from './pages/support/support.component';
import { HomeComponent } from './pages/home/home.component';
import { CreationsComponent } from './pages/creations/creations.component';
import { CreationspageComponent } from './pages/creationspage/creationspage.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    AboutComponent,
    EventsComponent,
    ProductsComponent,
    SupportComponent,
    HomeComponent,
    CreationsComponent,
    CreationspageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
