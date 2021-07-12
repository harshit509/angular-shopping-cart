import { Component, OnInit,Input } from '@angular/core';
import { Product } from 'src/app/models/product';
import { MessengerService } from 'src/app/services/messenger.service';

@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.css']
})
export class ProductItemComponent implements OnInit {
  @Input()
  productItem: any;
  imageURL: any;
  constructor( private msg:MessengerService) { 
    this.productItem = Product;
  }
  ngOnInit(): void {
    const productList = this.productItem;
    this.imageURL = 'http://' + productList.image;
  }

  handleAddToCart() {
    this.msg.sendmessage(this.productItem);
  }
}
