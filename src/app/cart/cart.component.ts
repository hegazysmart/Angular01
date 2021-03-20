import { Component, OnInit } from '@angular/core';
import { CartholderService } from '../cartholder.service';
import { ItemListService } from '../item-list.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  ids=[];
  items=[];
  result:{};

  constructor( private cartObject: CartholderService) { }

  ngOnInit(): void {
    this.items=this.cartObject.getcartItems();
    
  }
  

}
// this.route.params.subscribe( params => this.id= params['id']);
//     for(let item of this.movies){
//       if (item['id']==this.id){
//         this.selected=item;
//       }
//     }