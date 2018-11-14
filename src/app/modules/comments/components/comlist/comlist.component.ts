import { Component, OnInit } from '@angular/core';
import { Comments } from 'src/app/shared/model/comments';
import { CommentService } from '../../services/comment.service';

@Component({
  selector: 'app-comlist',
  templateUrl: './comlist.component.html',
  styleUrls: ['./comlist.component.css']
})
export class ComlistComponent implements OnInit {

  comments: Comments[];

  constructor(private comService: CommentService) { }

  ngOnInit() {
    this.getComments();
  }

  getComments(): void {
    this.comService.getComList().subscribe(comments => this.comments = comments);
  }

}
