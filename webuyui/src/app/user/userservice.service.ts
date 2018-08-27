import { Injectable } from '@angular/core';
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
    return this.localStorage.getItem('user_data').subscribe((user_data) => {
     if(user_data)
     {
      this.route.navigate(['user/view']);
     }
     this.route.navigate(['/user']);
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
   this.localStorage.getItem('user_cart').subscribe((user_cart) => {
   
    if(!user_cart)
    {
      this.localStorage.setItem('user_cart', []).subscribe(() => {});
    }
   
  },(error) =>{
    debugger;
   });
  }
  addToCart(data) {


  }
  logout() {
    this.localStorage.clear().subscribe(() => {});
    this.route.navigate(['user/']);
  }



}
