import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { BlogPost } from 'src/app/shared/model/blog-post';
import { ActivatedRoute } from '@angular/router';
import { BlogService } from '../../services/blog.service';
import { Location } from '@angular/common';


const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
}; 
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
    /*const id = +this.route.snapshot.paramMap.get('id')
    this.http.get<BlogPost>(this.staticPath + id).subscribe(blog => {
      this.blog = blog;
    });*/
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