import { Component, OnInit } from '@angular/core';
import { faCartPlus, faUserCircle } from '@fortawesome/free-solid-svg-icons'; //https://www.npmjs.com/package/@fortawesome/angular-fontawesome
import { CartholderService } from '../cartholder.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  faCartPlus=faCartPlus;
  faUserCircle=faUserCircle;
  length:number;
  constructor(private cartObj: CartholderService) {
  }

  ngOnInit(): void {
    this.length = this.cartObj.length;
  }
  

}
