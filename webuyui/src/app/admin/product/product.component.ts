import { Component, OnInit } from '@angular/core';
import { AdminService } from '../admin.service';
AdminService

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  title: string;
  category: string;
  desc: string;
  price: string;
  fileName: string;
  inputFile: any;
  catList: any;
 
  constructor(private serviceRef: AdminService) { }

  ngOnInit() {
    this.getAllCategory();
  }

  fileChangeEvent(fileInput: any) {

    let name = '';
    let size = 0;
    let flag = true;
    if (fileInput.target.files && fileInput.target.files[0]) {
      name = fileInput.target.files[0].name;
      size = parseFloat((fileInput.target.files[0].size / (1024 * 1024)).toFixed(2));
      this.fileName = name;
      this.inputFile = fileInput.target.files[0];
    } else {
      this.fileName = '';
    }
  }
  getAllCategory() {
    this.serviceRef.getAllCategoryy().subscribe(data =>{
      if(data['status']) {
        this.catList = data['result']['result']
      }
      else {
        this.catList = [];
      }


    });
  }
  addProduct() {
    let data: FormData  =  new  FormData();
    data.append('file',  this.inputFile);
    data.append('name',this.title);
    data.append('category',this.category);
    data.append('description',this.desc);
    data.append('price',this.price);
      this.serviceRef.importFile(data).subscribe(
      res => {
        debugger;
      }
    );
  }
 


}
