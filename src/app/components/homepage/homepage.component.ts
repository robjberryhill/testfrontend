import { Component, OnInit } from '@angular/core';
import { BlogService } from 'src/app/modules/bloglist/services/blog.service';
import { BlogPost } from 'src/app/shared/model/blog-post';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent implements OnInit {

  blogPosts: BlogPost[];

  constructor(private blogService: BlogService) { }

  ngOnInit() {
    this.getBlogs();
  }

  getBlogs(): void {
    this.blogService.getBlogPosts().subscribe(blogs => {
      this.blogPosts = blogs;
      console.log(blogs);
    });
  }

}
