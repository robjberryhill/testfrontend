import { Component, OnInit } from '@angular/core';
import { BlogPost } from 'src/app/shared/model/blog-post';
import { ActivatedRoute } from '@angular/router';
import { BlogService } from '../../services/blog.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '../../../../../environments/environment';
import { Comments } from 'src/app/shared/model/comments';
import { CommentService } from 'src/app/modules/comments/services/comment.service';


@Component({
  selector: 'app-blogdetails',
  templateUrl: './blogdetails.component.html',
  styleUrls: ['./blogdetails.component.css']
})
export class BlogdetailsComponent implements OnInit {
  blog: BlogPost;
  comments: Comments[];

  constructor(
    private blogService: BlogService,
    private comService: CommentService,
    private route: ActivatedRoute,
    private http: HttpClient
    ) { }

  ngOnInit() {
    this.getBlogDetailId();
    this.getComments();
  }

  getBlogDetailId(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.blogService.getBlogId(id)
    .subscribe(blog => this.blog = blog);
  }

  deleteBlog(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.blogService.deleteBlogPost(id).subscribe();
    window.location.href = '/blogs';
  }

  getComments(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.comService.getBcoms(id).subscribe(comments => {
      this.comments = comments;
    });    
  }
  
  addCom(data): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.comService.addComSrvc(data as Comments)
    .subscribe(com => {this.comments.push(com)});
    window.location.href = '/blogList/' + id;
  }
}
