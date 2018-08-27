import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserserviceService } from '../userservice.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  username: string;
  password: string;
  invalidtext : string;
  invalid : boolean = false;
  constructor(private route: Router,private userServiceRef :UserserviceService) { }

  ngOnInit() {
    debugger;
    this.checkSession();  
  }
  checkSession() {
    let chkSession = this.userServiceRef.checkSession();
    if(chkSession)
    {
    
    }
    
  }
  authenticateAdmin() {
  
    let data = {
      "emailId" : this.username,
      "password" : this.password
    };
    
    this.userServiceRef.validateUser(data).subscribe(data => {
      
      if(data['status'])
      {
        this.route.navigate(['user/view']);
      }
      else
      {
        this.invalidtext = "invalid username , password";
        this.invalid = true;
      }
    });

    
  }
  navigateToSignUp() {
    this.route.navigate(['user/signup']);
  }

}
