import { Injectable } from '@angular/core';
import {HttpClientService} from '../common/http-client.service';
import { LocalStorage } from '@ngx-pwa/local-storage';
@Injectable({
  providedIn: 'root'
})
export class UserserviceService {

  constructor(private HttpClientServiceRef:HttpClientService ,protected localStorage: LocalStorage) { }
  addUser(data) {
    return this.HttpClientServiceRef.post('api/users/user',data);
  }
  validateUser(data) {
    let user  = { firstName: 'Henri', lastName: 'Bergson' };
    debugger;
    this.localStorage.setItem('user', user).subscribe(() => {
      alert('ds');
    });
    this.localStorage.getItem('user').subscribe((user) => {
      alert(user.firstName); // should be 'Henri'
    });
    return this.HttpClientServiceRef.post('api/users/logincheck',data);
  }





}
