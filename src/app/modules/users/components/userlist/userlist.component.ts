import { Component, OnInit } from '@angular/core';
import { UsersService } from '../../services/users.service';
import { Users } from 'src/app/shared/model/users';

@Component({
  selector: 'app-userlist',
  templateUrl: './userlist.component.html',
  styleUrls: ['./userlist.component.css']
})
export class UserlistComponent implements OnInit {

  users: Users[];

  constructor(private usersService: UsersService) { }

  ngOnInit() {
    this.getUsers();
  }

  getUsers(): void {
    this.usersService.getAllUsers().subscribe(users => this.users = users);
  }

}
