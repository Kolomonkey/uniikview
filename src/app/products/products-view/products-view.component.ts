import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Product } from '../../shared';

@Component({
  selector: 'app-products-view',
  templateUrl: './products-view.component.html',
  styleUrls: ['./products-view.component.css']
})
export class ProductsViewComponent{

  productColumns = ['product_image', 'sku', 'name', 'description'];
  currentProduct: Product;
  product: Product;
  test;
  
  @Input() dataSource: Product[];

  @Output() saved = new EventEmitter();

  setCurrentProduct(product) {
    this.currentProduct = product;
    console.log(this.currentProduct);
  }

}
