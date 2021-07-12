import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/models/product';
import { ProductService } from 'src/app/service/product.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  productlist:Product[] = [];

  constructor(private productservice:ProductService) { }

  ngOnInit(): void {
   this.productservice.getproducts().subscribe((products)=>{
     this.productlist=products;
     console.log("its done");
   });
  }

}
