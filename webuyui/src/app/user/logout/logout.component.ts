import { Component, OnInit } from '@angular/core';
import { UserserviceService } from '../userservice.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-logout',
  templateUrl: './logout.component.html',
  styleUrls: ['./logout.component.css']
})
export class LogoutComponent implements OnInit {

  constructor(private serviceRef : UserserviceService) { 
  }

  ngOnInit() {
    this.newMethod();
  }


  private newMethod() {
    
    this.serviceRef.logout();
   
  }
}
