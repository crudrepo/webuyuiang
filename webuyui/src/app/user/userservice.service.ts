import { Injectable, Inject, PLATFORM_ID  } from '@angular/core';
import {HttpClientService} from '../common/http-client.service';
import { LocalStorage } from '@ngx-pwa/local-storage';
import { Router } from '@angular/router';
@Injectable({
  providedIn: 'root'
})
export class UserserviceService {

  constructor(private HttpClientServiceRef:HttpClientService ,protected localStorage: LocalStorage,private route:Router) { }
  addUser(data) {
    return this.HttpClientServiceRef.post('api/users/user',data);
  }
  checkSession() {
    this.localStorage.getItem('user_data').subscribe((user_data) => {
     if(user_data)
     {
      this.route.navigate(['/user/view']);
     }
     else
     {
      this.route.navigate(['/user']);
     }
    });
  }
  validateUser(data) {
     return this.HttpClientServiceRef.post('api/users/logincheck',data).map((data) =>{
    if(data['status'])
    {
      
        var user_data = [];
        user_data[data['message']['email']] = data['message']['data']['result'][0]
        this.localStorage.setItem('user_data', user_data).subscribe(() => {});
        this.initializeCart();
    }
      return data;
    });
  }
  getAllProducts() {
    return this.HttpClientServiceRef.get('api/product/productlist');
  }
  getAllCategory() {
    return this.HttpClientServiceRef.get("api/category/categorylist");
  }
  initializeCart() {

   this.localStorage.getItem('user_cart_flag').subscribe((user_cart_flag) => {
    
    if(!user_cart_flag)
    {
      this.localStorage.setItem('user_cart',[]).subscribe(() => {});
    }
   
  },(error) =>{
    
   });
  }
  addToCart(data) {
    
   
    this.localStorage.getItem('user_cart').subscribe((user_cart) => {
      
      this.localStorage.setItem('user_cart_flag',true).subscribe(() => {});
        
      if(user_cart)
        {
          let cartData = [];     
          cartData = user_cart;
          cartData.push(data);
          this.localStorage.setItem('user_cart',cartData).subscribe(() => {
            
            
          });
        }
      },(error) =>{
     });
       
    }
    
    
  
    getCartData() {
      return this.localStorage.getItem('user_cart')
      }
    logout() {
    this.localStorage.clear().subscribe(() => {});
    this.route.navigate(['user/']);
  }



}
