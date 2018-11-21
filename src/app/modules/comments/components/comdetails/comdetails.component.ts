import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CommentService } from '../../services/comment.service';
import { Comments } from 'src/app/shared/model/comments';


@Component({
  selector: 'app-comdetails',
  templateUrl: './comdetails.component.html',
  styleUrls: ['./comdetails.component.css']
})
export class ComdetailsComponent implements OnInit {
  comment: Comments;

  constructor(private comService: CommentService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.getComDetailId();
  }

  getComDetailId(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.comService.getComId(id)
    .subscribe(com => this.comment = com);
  }

  deleteCom(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.comService.deleteComSrvc(id).subscribe();
    window.location.href = '/comments';
  }

}
