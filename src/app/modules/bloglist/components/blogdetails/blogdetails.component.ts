import { Component, OnInit } from '@angular/core';
import { BlogPost } from 'src/app/shared/model/blog-post';
import { ActivatedRoute } from '@angular/router';
import { BlogService } from '../../services/blog.service';

@Component({
  selector: 'app-blogdetails',
  templateUrl: './blogdetails.component.html',
  styleUrls: ['./blogdetails.component.css']
})
export class BlogdetailsComponent implements OnInit {
  staticPath: string = 'http://localhost:3001/blogList/';
  blog: BlogPost;


  constructor(private blogService: BlogService, private route: ActivatedRoute) { }

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
