import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { faCartPlus } from '@fortawesome/free-solid-svg-icons';
import { ItemListService } from '../item-list.service';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css']
})
export class ItemComponent implements OnInit {
  faCartPlus=faCartPlus;
  selected={};
  id:number;
  constructor(private item: ItemListService, private rout: ActivatedRoute) { 
    this.rout.params.subscribe( params => this.id= params['id']);
  }

  ngOnInit(): void {
    this.item.getItem(this.id).subscribe(res => {
      this.selected = res;
    });
  }

}
