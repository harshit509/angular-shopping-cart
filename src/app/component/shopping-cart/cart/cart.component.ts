import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/models/product';
import { MessengerService } from 'src/app/services/messenger.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
cartItem=[
  {id:1,productid:1,qty:1,price:200,productname:'test1'},
  {id:2,productid:2,qty:2,price:300,productname:'test2'},
  {id:3,productid:3,qty:1,price:400,productname:'test3'},
  {id:4,productid:4,qty:1,price:200,productname:'test4'},
];
carttotal=0;

  constructor(private msg:MessengerService) { }

  ngOnInit(): void {
 this.msg.getMsg().subscribe(product=>{
   console.log(product);
 })

    this.cartItem.forEach(item=>{
this.carttotal += (item.qty*item.price);
    })
   
  }
}
