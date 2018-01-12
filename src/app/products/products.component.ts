import { Component, OnInit } from '@angular/core';
import { ProductsService, Product } from '../shared'
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatTableDataSource } from '@angular/material';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  products: Product[];
  currentProduct: Product;
  dataSource = new MatTableDataSource<Product>();
  hoverId: number;
  confirm = false;
  newProduct: Product = {id: null, sku: "", name: "", description: "", product_image: ""};
  productColumns = ['product_image', 'sku', 'name', 'description', 'actions'];

  constructor(private ps: ProductsService) { }

  ngOnInit() {
    this.getProducts()
  }

  setHoverId(productId){
    if (this.confirm === true && this.hoverId != productId) {
      this.confirmToggle();
      this.hoverId = productId;
    } else {
      this.hoverId = productId;
    }
  }

  confirmToggle(){
    if (this.confirm != true) {
      this.confirm = true
    } else {
      this.confirm = false;
    }
  }

  getProducts() {
    this.ps.all()
      .subscribe(products => {
        this.products = products;
        this.dataSource.data = products;
      });
  }

  saveProduct(product) {
    console.log(product)
    if (product.id != null) {
      this.updateProduct(product);
    } else {
      this.createProduct(product);
    }
  }

  createProduct(product) {
    this.ps.create(product)
      .subscribe(response => {
        this.getProducts();
      });
  }

  updateProduct(product) {
    this.ps.update(product)
      .subscribe(response => {
        this.getProducts();
        console.log(product);
      })
  }

  deleteProduct(product) {
    this.ps.delete(product)
      .subscribe(resposne => {
        this.getProducts();
      })
    }

}
