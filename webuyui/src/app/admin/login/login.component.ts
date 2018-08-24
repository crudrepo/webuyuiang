import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
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
  constructor(private route: Router) { }

  ngOnInit() {
  }
  authenticateAdmin() {
    console.log(this.username);
    console.log(this.password);
    
    if(this.username == 'admin' && this.password == 'admin')
    {
      this.route.navigate(['admin/dashboard']);
    }
    else
    {
        this.invalidtext = "invalid username , password";
        this.invalid = true;
    }
  }

}
