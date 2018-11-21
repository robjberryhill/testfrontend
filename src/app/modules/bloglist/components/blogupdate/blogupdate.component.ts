import { Component, OnInit } from '@angular/core';
import { BlogPost } from 'src/app/shared/model/blog-post';
import { ActivatedRoute } from '@angular/router';
import { BlogService } from '../../services/blog.service';
import { Location } from '@angular/common';


@Component({
  selector: 'app-blogupdate',
  templateUrl: './blogupdate.component.html',
  styleUrls: ['./blogupdate.component.css']
})
export class BlogupdateComponent implements OnInit {
  staticPath: string = 'http://localhost:3001/blogList/';
  blog: BlogPost;

  constructor(private blogService: BlogService, private route: ActivatedRoute, private location: Location) { }

  ngOnInit() {
    this.getUpdateId();
  }

  getUpdateId(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.blogService.getBlogId(id)
    .subscribe(blog => this.blog = blog);
  }

  updateBlog(): void {
    this.blogService.updateBlogPost(this.blog).subscribe(() => this.backToBlog());
  }

  backToBlog(): void {
    this.location.back();
  }
}