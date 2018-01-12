import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Product } from '../../shared';

@Component({
  selector: 'app-products-view',
  templateUrl: './products-view.component.html',
  styleUrls: ['./products-view.component.css']
})
export class ProductsViewComponent{

  productColumns = ['product_image', 'sku', 'name', 'description', 'actions'];
  newProduct: Product = {id: null, sku: "", name: "", description: "", product_image: ""};
  
  @Input() dataSource: Product[];
  @Input() hoverId: number;
  @Input() confirm;

  @Output() saved = new EventEmitter();
  @Output() delete = new EventEmitter();
  @Output() create = new EventEmitter();
  @Output() setHoverId = new EventEmitter();
  @Output() confirmToggle = new EventEmitter();

}
