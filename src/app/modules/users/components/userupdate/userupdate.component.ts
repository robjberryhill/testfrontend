import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { UsersService } from '../../services/users.service';
import { Users } from 'src/app/shared/model/users';

@Component({
  selector: 'app-userupdate',
  templateUrl: './userupdate.component.html',
  styleUrls: ['./userupdate.component.css']
})
export class UserupdateComponent implements OnInit {
  user: Users;

  constructor(private usersService: UsersService, private route: ActivatedRoute, private location: Location) { }

  ngOnInit() {
    this.getUserUpdateId();
  }

  getUserUpdateId(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.usersService.getUserId(id)
    .subscribe(user => this.user = user);
  }

  updateUser(): void {
    this.usersService.updateUserEntry(this.user).subscribe(() => this.backToUser());
  }

  backToUser(): void {
    this.location.back();
  }

}
