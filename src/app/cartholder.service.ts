import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CartholderService {
  cartArray=[];
  length=0;
  constructor(private http: HttpClient) { }
  getcartlength(){
    return this.length;
  }
  getcartItems(){
    return this.cartArray;
  }
  addToCart(item){
    this.cartArray.push(item);
    this.length++;
  }
}
