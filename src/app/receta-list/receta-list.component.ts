import { Component } from '@angular/core';
import { Recipe } from '../receta';
import { RecetaService } from '../receta.service';

@Component({
  selector: 'app-receta-list',
  templateUrl: './receta-list.component.html',
  styleUrls: ['./receta-list.component.css']
})
export class RecetaListComponent {
recipes: Recipe[] = [];

constructor(private recipeService: RecetaService) { }

  ngOnInit(): void {
    this.recipes = this.recipeService.getRecipes();
  }


}


