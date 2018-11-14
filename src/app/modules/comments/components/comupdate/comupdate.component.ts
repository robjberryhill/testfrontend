import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { CommentService } from '../../services/comment.service';
import { Comments } from 'src/app/shared/model/comments';

@Component({
  selector: 'app-comupdate',
  templateUrl: './comupdate.component.html',
  styleUrls: ['./comupdate.component.css']
})
export class ComupdateComponent implements OnInit {
  comment: Comments

  constructor(
    private comService: CommentService,
    private route: ActivatedRoute,
    private location: Location
  ) { }

  ngOnInit() {
    this.getUpdateComId();
  }

  getUpdateComId(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.comService.getComId(id)
    .subscribe(com => this.comment = com);
  }

  updateCom(): void {
    this.comService.updateComSrvc(this.comment).subscribe(() => this.backToCom());
  }

  backToCom(): void {
    this.location.back();
  }

}
