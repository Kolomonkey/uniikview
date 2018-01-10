import { Http, Headers, URLSearchParams } from '@angular/http';
import { Injectable } from '@angular/core';
import { Product } from './product.model';

const BASE_URL = 'http://localhost:3000/products/';

const HEADER = {headers: new Headers({'Content-Type': 'application/json'})};

@Injectable()
export class ProductsService {
  constructor(private http: Http) { }

  all() {
    return this.http.get(BASE_URL)
      .map()
  }

}
