import { Component } from '@angular/core';
import { Product } from '../producto';
import { ProductoService } from '../producto.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent {
products: Product[]=[];

constructor(private productService: ProductoService) { }

  ngOnInit(): void {
    this.products = this.productService.getProducts();

  }
}



