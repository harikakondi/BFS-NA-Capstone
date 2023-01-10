import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent {
  userList: any[]=[];

  constructor(private http:HttpClient){

  }
  ngOnInit() {
    this.getCustomerList();
  }

  getCustomerList(){
    this.http.get('http://localhost:8090/users').subscribe((responce:any) =>{
      this.userList = responce;
    })
  }
}



