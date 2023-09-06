import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CulturaGastronomicaComponent } from './cultura-gastronomica/cultura-gastronomica.component';
import { CultureDetailsComponent } from './culture-details/culture-details.component';
import { ProductListComponent } from './product-list/product-list.component';
import { RecetaListComponent } from './receta-list/receta-list.component';
import { RestaurantListComponent } from './restaurant-list/restaurant-list.component';

@NgModule({
  declarations: [
    AppComponent,
    CulturaGastronomicaComponent,
    CultureDetailsComponent,
    ProductListComponent,
    RecetaListComponent,
    RestaurantListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
