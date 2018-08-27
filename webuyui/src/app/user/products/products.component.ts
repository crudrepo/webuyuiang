import { Component, OnInit } from '@angular/core';
import { UserserviceService } from '../userservice.service';
import { ProductlistComponent } from '../productlist/productlist.component';
ProductlistComponent
UserserviceService

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
  catArr = {};
  productArr = [];
  
  constructor(private UserserviceServiceRef :UserserviceService) { }

  ngOnInit() {
    this.getAllCategory();
    this.getAllProduct();
  }
  getAllCategory() {
    this.UserserviceServiceRef.getAllCategory().subscribe(data =>{
      debugger;
      let arr = [];
      arr = data['result']['result'];
      for (let i in arr) {
        debugger;
        this.catArr[arr[i]['id']] = arr[i]['name'];
     }
    });
  }
  getAllProduct() {
    this.UserserviceServiceRef.getAllProducts().subscribe(data =>{
      debugger;
      if(data['status']) {
        this.productArr = data['result']['result'];
      }
      else
      {
        this.productArr = [];
      }

    });
  }
  addToCart() {

  }


}
