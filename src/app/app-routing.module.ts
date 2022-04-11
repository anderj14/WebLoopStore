import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './pages/about/about.component';
import { CreationsComponent } from './pages/creations/creations.component';
import { CreationspageComponent } from './pages/creationspage/creationspage.component';
import { EventsComponent } from './pages/events/events.component';
import { HomeComponent } from './pages/home/home.component';
import { ProductsComponent } from './pages/products/products.component';
import { SupportComponent } from './pages/support/support.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'about', component: AboutComponent },
  { path: 'creations', component: CreationsComponent },
  { path: 'events', component: EventsComponent },
  { path: 'products', component: ProductsComponent },
  { path: 'support', component: SupportComponent },
  { path: 'creations/:id', component: CreationspageComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
