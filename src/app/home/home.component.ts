import { Component, OnInit } from '@angular/core';
import { CartholderService } from '../cartholder.service';
import { ItemListService } from '../item-list.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  items: any;
  cartList=[];
  
  constructor(private itemList: ItemListService, private cartObbj: CartholderService) { }

  ngOnInit(): void {
    this.itemList.getItemList().subscribe(res => {
      this.items = res
    });
  }
  addItem(item){
    this.cartObbj.addToCart(item);
  }

}
