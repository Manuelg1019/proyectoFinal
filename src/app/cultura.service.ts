import { Injectable } from '@angular/core';
import { Culture } from './cultura';
import { Product } from './producto';
import { Recipe } from './receta';
import { Restaurant } from './restaurante';

@Injectable({
  providedIn: 'root'
})
export class CulturaService {

  private culturas: Culture[] =[

    {
      id: 1,
      name: 'Cultura Gastronómica Colombiana',
      description: "Colombia no tiene un plato nacional.La naturaleza ha bendecido a los colombianos con un país fértil: Pescados, plátanos en la costa; una asombrosa variedad de frutas tropicales, café, chocolate y productos lácteos en las montañas; verduras y carnes baratas y frescas por doquier. La cocina mayoritaria otorga primacía a los platos poco aderezados, sin especias ni picantes, sin adornos ni guarniciones copiosas; en resumen, preparados con sencillez. O quizá los colombianos prefieran la cocina sencilla porque así saborean mejor los ingredientes naturales. Aquí la calidad de la comida es elevada (como lo es la higiene en sus preparaciones), de modo que incluso aquellos con las papilas gustativas más fatigadas encontrarán algo que les tiente el paladar. ",
      countries: ['Colombia'],
      products: ["CAFE", "HARINA PAN", "AREQUIPE", "COLA Y POLA ", "QUESO", "LECHE", "PAN", "FRUTAS" ],
      recipes: ["Bandeja paisa", "Ajiaco" , "Sancocho,"] ,
      restaurants:  [
      {name: "LEO", city: "Bogota", country: "Colombia", cultures: "Gastronomia Colombiana"},
      {name: "HARRY SASSON", city: "Bogota", country: "Colombia", cultures: "Gastronomia Colombiana" },
      {name: "EL CHATO", city: "Bogota", country: "Colombia", cultures: "Gastronomia Colombiana" },
      {name: "CRITERION", city: "Bogota", country: "Colombia", cultures: "Gastronomia Colombiana" },
      {name: "EL CIELO", city: "Bogota", country: "Colombia", cultures: "Gastronomia Colombiana" },
      {name: "CARMEN", city: "Medellin", country: "Colombia", cultures: "Gastronomia Colombiana" },
      {name: "SALVO PATRIA", city: "Bogota", country: "Colombia", cultures: "Gastronomia Colombiana" },
      {name: "MESA FRANCA", city: "Bogota", country: "Colombia", cultures: "Gastronomia Colombiana" },
    ],
    },
    {
    id: 2,
    name: 'Cultura Gastronómica Asiatica',
    description: 'La comida asiática está cada vez más presente en la gastronomía de cualquier país, no es para menos, teniendo en cuenta que abarca una gran parte de la población mundial. Probablemente la china y la japonesa son las más extendidas y conocidas por todos, pero la gastronomía de países como India, Vietnam o Tailandia le siguen a la cola. Cada vez está ganando más adeptos en la sociedad española, así que vamos a conocer un poco más a fondo la cocina nipona.    ',
    countries: ['China', 'Japon', 'India', 'Tailandesa'],
    products:  ["SOYA", "ARROZ", "MISO", "CHILES", "VERDURAS", "MARISCOS", "HONGOS"],
    recipes: ["BIBIMBAP", "SUKIYAKI ", "DIM SUM" ],
   restaurants: [
   {name: "LEO", city: "Bogota", country: "Colombia", cultures: "Gastronomia Colombiana"},
   {name: "LEDU", city: "Bangkok", country: "Tailandia", cultures: "Gastronomia Asiatica" },
   {name: "SEZANNE ", city: "Tokio", country: "Japon", cultures: "Gastronomia Asiatica" },
   {name: "NUSARA", city: "Bangkok", country: "Tailandia", cultures: "Gastronomia Asiatica" },
   {name: "Den", city: "Tokio", country: "Japon", cultures: "Gastronomia Asiatica" },
   {name: "ODDETE", city: "Singapur", country: "Singapur", cultures: "Gastronomia Asiatica" },
   ],
    },
  ]
  


  constructor() { }

  getCultures(): Culture[] {

    return this.culturas;
  }

  getCultureByName(name: string): Culture | undefined {
    return this.culturas.find(culture => culture.name === name);
}

}