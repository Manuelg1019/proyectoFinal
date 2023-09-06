import { Injectable } from '@angular/core';
import { Product } from './producto';

@Injectable({
  providedIn: 'root'
})
export class ProductoService {

  private products: Product [] = [
    {
      name : "CAFE",
      description: 'Descripción del producto 1.',
      pais: "Colombia",
      culture: "Gatronomia Colombiana",
      category: 'Planta para sacar  el cafe',
    },
    {
      name : "HARINA PAN",
      description: 'Descripción del producto 2',
      pais: "Colombia",
      culture: "Gatronomia Colombiana",
      category: 'Harinas',
    },
    {
      name : " AREQUIPE",
      description: 'Descripción del producto 3',
      pais: "Colombia",
      culture: "Gatronomia Colombiana",
      category: 'Golocinas',
    },
    {
      name : "COLA Y POLA",
      description: 'Descripción del producto 4',
      pais: "Colombia",
      culture: "Gatronomia Colombiana",
      category: 'Bebidas',
    },
    {
      name : "QUESO",
      description: 'Descripción del producto 5',
      pais: "Colombia",
      culture: "Gatronomia Colombiana",
      category: 'Lacteos',
    },
    {
      name : "SOYA",
      description: 'Descripción del producto 6',
      pais: "China, Japon",
      culture: "Gatronomia Asiatica",
      category: 'Aceites',
    },
    {
      name : "ARROZ",
      description: 'Descripción del producto 7',
      pais: "En toda Asia",
      culture: "Gatronomia Asiatica",
      category: 'Granos',
    },
    {
      name : "MISO",
      description: 'Descripción del producto 8',
      pais: "Japon",
      culture: "Gatronomia Asiactica",
      category: 'Pasta',
    },
    {
      name : "CHILES",
      description: 'Descripción del producto 9',
      pais: "Chengdu,China",
      culture: "Gatronomia Asiatica",
      category: 'Vegetales',
    },  
    { name : "MARISCOS",
      description: 'Descripción del producto 10',
      pais: "China, Japon, Korea, India",
      culture: "Gatronomia Asiatica",
      category: 'Comida de mar',
  }
  ];

  constructor() { }

  getProducts(): Product[] {
    return this.products;
  }
  
  }


