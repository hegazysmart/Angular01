import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class ItemListService {
  constructor( private http: HttpClient) { }

  getItemList(){
    return this.http.get('https://fakestoreapi.com/products');
  }

  getItem(item){
    return this.http.get('https://fakestoreapi.com/products/'+item);
  }
}
