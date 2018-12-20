import { Component, OnInit } from '@angular/core';
import { Users } from 'src/app/shared/model/users';
import { UsersService } from '../../services/users.service';

@Component({
  selector: 'app-usersignup',
  templateUrl: './usersignup.component.html',
  styleUrls: ['./usersignup.component.css']
})
export class UsersignupComponent implements OnInit {
  users: Users[];

  constructor(private usersService: UsersService) { }

  ngOnInit() {
  }

  addUser(data): void {
    this.usersService.addUserEntry(data as Users)
    .subscribe(user => {
      this.users.push(user);
    });
    window.location.href = '/login';
  }
}
