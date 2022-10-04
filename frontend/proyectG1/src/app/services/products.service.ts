import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  private URL = 'http://localhost:3002/api'
  constructor(private http: HttpClient) { }

  getProducts(){
    this.http.get(this.URL + '/products');
  }

  getPrivateProducts(){
    this.http.get(this.URL + '/private-products');
  }

}
