import { Component, OnInit } from '@angular/core';
import { BlogPost } from 'src/app/shared/model/blog-post';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { BlogService } from '../../services/blog.service';

@Component({
  selector: 'app-blogcreate',
  templateUrl: './blogcreate.component.html',
  styleUrls: ['./blogcreate.component.css']
})
export class BlogcreateComponent implements OnInit {
  staticPath: string = 'http://localhost:3001/blogList';
  blogPosts: BlogPost[];

  constructor(private blogService: BlogService) { }

  ngOnInit() {
    /*this.http.get<BlogPost[]>(this.staticPath).subscribe(blogs => {
      this.blogPosts = blogs;
    });*/
    this.getBlogsBc();
  }

  getBlogsBc(): void {
    this.blogService.getBlogPosts().subscribe(blogs => this.blogPosts = blogs);
  }

  addBlog(data): void {
    this.blogService.addBlogPost(data as BlogPost)
    .subscribe(blog => {this.blogPosts.push(blog)});
    window.location.href = '/blogs';
  }

}
