import { Component, OnInit, Input } from '@angular/core';
import { UserserviceService } from '../userservice.service';


@Component({
  selector: 'app-productlist',
  templateUrl: './productlist.component.html',
  styleUrls: ['./productlist.component.css']
})
export class ProductlistComponent implements OnInit {
@Input()product:any;
image_ref: string="http://localhost:82/webuiphp-master/images/";
  constructor(private serviceRef :UserserviceService) { }

  ngOnInit() {
  }
  addToCart() {
    this.serviceRef.addToCart(this.product);
  }
}
