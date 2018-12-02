import { Component, OnInit } from '@angular/core';
import { CommentService } from '../../services/comment.service';
import { Comments } from 'src/app/shared/model/comments';

@Component({
  selector: 'app-comcreate',
  templateUrl: './comcreate.component.html',
  styleUrls: ['./comcreate.component.css']
})
export class ComcreateComponent implements OnInit {
  comments: Comments[];

  constructor(private comService: CommentService) { }

  ngOnInit() {
    this.getComCc();
  }

  getComCc(): void {
    this.comService.getComList().subscribe(cmnt => this.comments = cmnt);
  }

  /*addCom(data): void {
    this.comService.addComSrvc(data as Comments)
    .subscribe(com => {this.comments.push(com)});
    window.location.href = '/comments';
  }*/

}
