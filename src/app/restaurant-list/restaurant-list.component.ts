import { Component, OnInit } from '@angular/core';
import { Restaurant } from '../restaurante';
import { RestauranteService } from '../restaurante.service';

@Component({
  selector: 'app-restaurant-list',
  templateUrl: './restaurant-list.component.html',
  styleUrls: ['./restaurant-list.component.css']
})
export class RestaurantListComponent implements OnInit {
  
  restaurants: Restaurant[];

  constructor(private restaurantService: RestauranteService) { 
    this.restaurants=[];
  }

  ngOnInit(): void {
    this.restaurants = this.restaurantService.getRestaurants();
  }
}

