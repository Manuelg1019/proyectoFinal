import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CulturaService } from '../cultura.service';
import { Culture } from '../cultura';
import { ProductoService } from '../producto.service';
import { RecetaService } from '../receta.service';
import { RestauranteService } from '../restaurante.service'; 
import { Product } from '../producto';
import { Recipe } from '../receta';
import { Restaurant } from '../restaurante';
 


@Component({
  selector: 'app-culture-details',
  templateUrl: './culture-details.component.html',
  styleUrls: ['./culture-details.component.css']
})
export class CultureDetailsComponent implements OnInit {
  
  
  culture: Culture | undefined;
  Products: Product[] = [];
  recipes: Recipe [] = [];
  restaurants: Restaurant[] = [];
  


  constructor(
    private route: ActivatedRoute,
    private cultureService: CulturaService,
    private productService: ProductoService,
    private recipeService: RecetaService,
    private restaurantService: RestauranteService
    ) { }
    ngOnInit(): void {
      const name = this.route.snapshot.paramMap.get('name');
    
      if (name) {
        this.culture = this.cultureService.getCultureByName(name);
      } else {
        return;
        // Aquí puedes manejar el caso en el que 'name' sea nulo, por ejemplo, asignando un valor predeterminado o mostrando un mensaje de error.
      }
      
      

      
    
    }
    
  }