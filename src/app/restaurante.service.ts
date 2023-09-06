import { Injectable } from '@angular/core';
import { Restaurant } from './restaurante';

@Injectable({
  providedIn: 'root'
})
export class RestauranteService {
  getRestaurantsByCulture(name: string): any {
    throw new Error('Method not implemented.');
  }

  private restaurants: Restaurant [] = [

    {name: "LEO", city: "Bogota", country: "Colombia", cultures: "Gastronomia Colombiana"},
    {name: "HARRY SASSON", city: "Bogota", country: "Colombia", cultures: "Gastronomia Colombiana" },
    {name: "EL CHATO", city: "Bogota", country: "Colombia", cultures: "Gastronomia Colombiana" },
    {name: "CRITERION", city: "Bogota", country: "Colombia", cultures: "Gastronomia Colombiana" },
    {name: "EL CIELO", city: "Bogota", country: "Colombia", cultures: "Gastronomia Colombiana" },
    {name: "CARMEN", city: "Medellin", country: "Colombia", cultures: "Gastronomia Colombiana" },
    {name: "SALVO PATRIA", city: "Bogota", country: "Colombia", cultures: "Gastronomia Colombiana" },
    {name: "MESA FRANCA", city: "Bogota", country: "Colombia", cultures: "Gastronomia Colombiana" },
    {name: "LEO", city: "Bogota", country: "Colombia", cultures: "Gastronomia Colombiana"},
    {name: "LEDU", city: "Bangkok", country: "Tailandia", cultures: "Gastronomia Asiatica" },
    {name: "SEZANNE ", city: "Tokio", country: "Japon", cultures: "Gastronomia Asiatica" },
    {name: "NUSARA", city: "Bangkok", country: "Tailandia", cultures: "Gastronomia Asiatica" },
    {name: "Den", city: "Tokio", country: "Japon", cultures: "Gastronomia Asiatica" },
    {name: "ODDETE", city: "Singapur", country: "Singapur", cultures: "Gastronomia Asiatica" },
  ];
  
  constructor() { }

  getRestaurants(): Restaurant[] {
    return this.restaurants;
  }


  getRestaurantById(name: string): Restaurant | undefined {
    return this.restaurants.find(restaurant => restaurant.name === name);
  }

}
