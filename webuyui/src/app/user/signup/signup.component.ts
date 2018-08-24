import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserserviceService } from '../userservice.service';



@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  name: string;
  email: string;
  pwd: string;
  address: string;
  pincode: string;
  mobno: string;
  success: string="";
  flag:boolean = true;
 
  constructor(private route: Router,private userServiceRef :UserserviceService) { }

  ngOnInit() {
  }
  cancelForm() {
    this.route.navigate(['user']);
  }
  submitForm() {
    /*
    `name`,`address`,`pincode`,`emailId`,`mobileNo`,`password`,`userType`,`user_status`


    */

    let data = {
      "name" : this.name,
      "address" : this.address,
      "pincode" : this.pincode,
      "emailId" : this.email,
      "mobileNo" : this.mobno,
      "password" : this.pwd,
      "userType" : 0,
      "user_status" : 1
    }
    this.userServiceRef.addUser(data).subscribe(data => {
    this.success = "User added successfully .";
    this.flag = false;
    setTimeout(() =>{
      this.success = "";
      this.flag = true;
      this.route.navigate(['user/view']);
    } , 1000);
    
  });;
  }
}
