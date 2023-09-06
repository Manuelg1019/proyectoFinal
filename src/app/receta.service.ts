import { Injectable } from '@angular/core';
import { Recipe } from './receta';

@Injectable({
  providedIn: 'root'
})
export class RecetaService {
  getRecipesByCulture(name: string): any {
    throw new Error('Method not implemented.');
  }

  private recipes: Recipe [] = [
    {

      name: '',
      description: 'Es un plato típico de la región de Antioquia (Medellín) y se compone de carne de res, picadillo, chicharrón, chorizo, frijoles negros, arroz, huevo frito, plátanos, arepas, hogao y aguacate ',
      photoUrl: '',
      ingredientes: ["1 1/2 cucharadas de aceite (21 g)", "2 tallos de cebolla larga finamente picada (30 g)" , "2 tomates maduros sin piel y finamente picados (240 g)",
      "1 sobre de CALDO CON COSTILLA MAGGI® DESMENUZADO (9 g)",
      "3 tazas de agua (750 ml)",
      "1/2 libra de fríjoles bola roja remojados desde la noche anterior (250 g)",
      "1 zanahoria mediana, entera y pelada (140 g)",
      "1/4 libra de carne molida magra (125 g)",
      "1/2 libra de arroz blanco cocinado (250 g)",
      "1/4 de libra de tocino crocante cortado en 4 porciones (125 g)",
      "4 chorizos tipo coctel previamente cocinados y dorados (120 g)",
      "4 huevos fritos (200 g)",
      "1 aguacate partido en 4 porciones (110 g)",
      "4 arepas pequeñas redondas (80 g)",
      "4 tajadas de plátano maduro fritas (80 g)",
      
      ] 
    },
    ];

  constructor() { }

  getRecipes(): Recipe[] {
    return this.recipes;
  }
}
