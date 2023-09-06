import { Product } from "./producto";
import { Recipe } from "./receta";
import { Restaurant } from "./restaurante";


export interface Culture {
    id?:number | undefined;
    name: string;
    description: string;
    countries: string[];
    products: string[];
    recipes: string[];
    restaurants: Restaurant[];
  }
  