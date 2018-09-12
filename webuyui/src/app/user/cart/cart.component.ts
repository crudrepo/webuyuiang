import { Component, OnInit } from '@angular/core';
import { UserserviceService } from '../userservice.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  cartData = [];
  total = 0;
  deleteFlag = true;
  image_ref: string="http://localhost:82/webuiphp-master/images/";
  constructor(private serviceRef :UserserviceService , private route :Router) { }

  ngOnInit() {
    this.getCartData();
  }
  ngAfterContentChecked()  {
    this.total = this.cartData.reduce((runningValue:number, cart)=> {
      return runningValue = runningValue + parseInt(cart['price']);
    }, 0);
}
  getCartData() {
    
    this.serviceRef.getCartData().subscribe((user_cart) => {
      this.cartData = user_cart;
      },(error) =>{
     });;
  }
  navigateToCheckout() {
    this.route.navigate(['/user/view/checkout']);
  }
  backToProduct() {
    this.route.navigate(['/user/view/products']);
  }


}
