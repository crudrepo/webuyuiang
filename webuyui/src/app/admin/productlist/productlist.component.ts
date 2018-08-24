import { Component, OnInit } from '@angular/core';
import { AdminService } from '../admin.service';

@Component({
  selector: 'app-productlist',
  templateUrl: './productlist.component.html',
  styleUrls: ['./productlist.component.css']
})
export class ProductlistComponent implements OnInit {
  image_ref: string="http://localhost:82/webuiphp-master/images/";
  prodList:any = [];
  constructor(private serviceRef: AdminService) { }

  ngOnInit() {
    this.getProductList();
  }
  getProductList() {
    this.serviceRef.getAllProduct().subscribe(data =>{
      debugger;
      if(data['status']) {
        this.prodList = data['result']['result'];
      }
      else
      {
        this.prodList = [];
      }

    });
  }
}
