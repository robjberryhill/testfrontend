import { Component, OnInit, Input } from '@angular/core';
import { BlogPost } from '../../../../shared/model/blog-post';
import { BlogService } from '../../services/blog.service';

@Component({
  selector: 'app-blog-posts',
  templateUrl: './blog-posts.component.html',
  styleUrls: ['./blog-posts.component.css']
})
export class BlogPostsComponent implements OnInit {

  blogPosts: BlogPost[];

  constructor(private blogService: BlogService) { }

  ngOnInit() {
    this.getLatestBlogs();
  }

  getLatestBlogs(): void {
    this.blogService.getBlogPosts().subscribe(blogs => this.blogPosts = blogs);
  }

}
