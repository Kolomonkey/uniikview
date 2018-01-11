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

  constructor(private ps: ProductsService) { }

  ngOnInit() {
    this.getProducts()
  }

  setCurrentProduct(product){
    this.currentProduct = product;
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
