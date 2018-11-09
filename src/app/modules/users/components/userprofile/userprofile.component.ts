import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UsersService } from '../../services/users.service';
import { Users } from 'src/app/shared/model/users';

@Component({
  selector: 'app-userprofile',
  templateUrl: './userprofile.component.html',
  styleUrls: ['./userprofile.component.css']
})
export class UserprofileComponent implements OnInit {

  user: Users;

  constructor(private usersService: UsersService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.getUserProfileId();
  }

  getUserProfileId(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.usersService.getUserId(id)
    .subscribe(user => this.user = user);
  }

}
