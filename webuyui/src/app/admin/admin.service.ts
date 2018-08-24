import { Injectable } from '@angular/core';
import { HttpClientService } from '../common/http-client.service';

@Injectable({
  providedIn: 'root'
})
export class AdminService {

  constructor(private httpserviceref : HttpClientService) { }
  addCategory(data) {
    return this.httpserviceref.post("api/category/category",data);
  }
  getAllCategoryy() {
    return this.httpserviceref.get("api/category/categorylist");
  }
  importFile(params) {
    return this.httpserviceref.formPost('api/product/product', params);
  }
  getAllProduct() {
    return this.httpserviceref.get('api/product/productlist');
  }



}
