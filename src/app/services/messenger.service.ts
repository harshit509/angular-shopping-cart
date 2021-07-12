import { Injectable } from '@angular/core';
import{Subject}from'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MessengerService {
subject=new Subject();
  constructor() { }
  
  sendmessage(product:any){
    console.log(product);
this.subject.next(product)//for triggering a message
  }

  getMsg() {
    return this.subject.asObservable();
  }
}
