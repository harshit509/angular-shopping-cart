import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from 'src/app/models/product';


const apiUrl="http://csx.pythonanywhere.com/product/";
@Injectable({
  providedIn: 'root'
})
export class ProductService {

 

  constructor(private http:HttpClient) { 

  }
  getproducts():Observable <Product[]>{
    return this.http.get<Product[]>(apiUrl);

  }
}
