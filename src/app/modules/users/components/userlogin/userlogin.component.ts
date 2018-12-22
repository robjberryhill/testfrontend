import { Component, OnInit } from '@angular/core';
import { UsersService } from '../../services/users.service';
import { Users } from 'src/app/shared/model/users';

@Component({
  selector: 'app-userlogin',
  templateUrl: './userlogin.component.html',
  styleUrls: ['./userlogin.component.css']
})
export class UserloginComponent implements OnInit {
  users: Users[];

  constructor(private userService: UsersService) {
   }

  ngOnInit() {
  }

  userLogin(data){
    this.userService.userLoginSvc(data as Users)
    .subscribe(user => {
      if(user.userAdmin){
        window.location.href = '/users'
      } else {
        window.location.href = '/profile/' + user.userId
      }
    });
  }
}
