import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CulturaGastronomicaComponent } from './cultura-gastronomica/cultura-gastronomica.component';
import { CultureDetailsComponent } from './culture-details/culture-details.component';
import { ProductListComponent } from './product-list/product-list.component';
import { RecetaListComponent } from './receta-list/receta-list.component';
import { RestaurantListComponent } from './restaurant-list/restaurant-list.component';

const routes: Routes = [

  { path: '', redirectTo: '/cultures', pathMatch: 'full' }, // Ruta de inicio
  { path: 'cultures', component: CulturaGastronomicaComponent }, // Ruta para la lista de culturas
  { path: 'cultures/:name', component: CultureDetailsComponent }, // Ruta para los detalles de una cultura
  { path: 'products', component: ProductListComponent }, // Ruta para la lista de productos
  { path: 'recipes', component: RecetaListComponent }, // Ruta para la lista de recetas
  { path: 'restaurants', component: RestaurantListComponent }, // Ruta para la lista de restaurantes
  // Puedes agregar más rutas según tus necesidades


  // Agrega otras rutas según tus necesidades
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

