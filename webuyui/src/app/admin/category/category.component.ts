import { Component, OnInit } from '@angular/core';
import { AdminService } from '../admin.service';
AdminService

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent implements OnInit {
  catname: string;
  catList : any;
  constructor(private service : AdminService) { }

  ngOnInit() {
    this.getAllCategory();
  }
  getAllCategory() {
    this.service.getAllCategoryy().subscribe(data =>{
      if(data['status']) {
        this.catList = data['result']['result']
      }
      else {
        this.catList = [];
      }


    });
  }
  addCategory() {
    let data = {
      "name" : this.catname
    };
    this.service.addCategory(data).subscribe(data =>{
      this.catname = "";
      this.getAllCategory();
    });
  }

}
