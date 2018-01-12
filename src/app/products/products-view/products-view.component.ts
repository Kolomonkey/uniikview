import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Product } from '../../shared';

@Component({
  selector: 'app-products-view',
  templateUrl: './products-view.component.html',
  styleUrls: ['./products-view.component.css']
})
export class ProductsViewComponent{
  
  @Input() dataSource: Product[];
  @Input() hoverId: number;
  @Input() newProduct: Product;
  @Input() confirm;
  @Input() productColumns;

  @Output() saved = new EventEmitter();
  @Output() delete = new EventEmitter();
  @Output() create = new EventEmitter();
  @Output() setHoverId = new EventEmitter();
  @Output() confirmToggle = new EventEmitter();

}
