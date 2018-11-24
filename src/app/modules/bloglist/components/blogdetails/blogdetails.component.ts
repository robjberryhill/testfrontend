import { Component, OnInit } from '@angular/core';
import { BlogPost } from 'src/app/shared/model/blog-post';
import { ActivatedRoute } from '@angular/router';
import { BlogService } from '../../services/blog.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '../../../../../environments/environment';


@Component({
  selector: 'app-blogdetails',
  templateUrl: './blogdetails.component.html',
  styleUrls: ['./blogdetails.component.css']
})
export class BlogdetailsComponent implements OnInit {
  blog: BlogPost;
  private beUrl = environment.backendUrl;
  private blogPath = this.beUrl;


  constructor(
    private blogService: BlogService,
    private route: ActivatedRoute,
    private http: HttpClient
    ) { }

  ngOnInit() {
    this.getBlogDetailId();
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
}
