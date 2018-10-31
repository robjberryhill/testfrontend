import { Component, OnInit, Input } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BlogPost } from '../../model/blog-post';

@Component({
  selector: 'app-blog-posts',
  templateUrl: './blog-posts.component.html',
  styleUrls: ['./blog-posts.component.css']
})
export class BlogPostsComponent implements OnInit {
  blogPosts: BlogPost[];
  @Input() path: string;

  constructor(private http: HttpClient) { }

  ngOnInit() {
    this.http.get<BlogPost[]>(this.path).subscribe(posts => {
      this.blogPosts = posts;
    });
  }

}
