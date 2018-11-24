import { Component, OnInit } from '@angular/core';
import { BlogPost } from 'src/app/shared/model/blog-post';
import { ActivatedRoute } from '@angular/router';
import { BlogService } from '../../services/blog.service';
import { Location } from '@angular/common';
import { environment } from '../../../../../environments/environment';


@Component({
  selector: 'app-blogupdate',
  templateUrl: './blogupdate.component.html',
  styleUrls: ['./blogupdate.component.css']
})
export class BlogupdateComponent implements OnInit {
  staticPath: string = 'http://localhost:3001/blogList/';
  blog: BlogPost;
  imgSelected: File = null;
  private beUrl = environment.backendUrl;
  private blogPath = this.beUrl;


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

  picSelected(files: FileList) {
    const id = +this.route.snapshot.paramMap.get('id');
    this.imgSelected = files[0];
    console.log(files);
    console.log(this.imgSelected)
    this.blog.blogPhoto = (this.blogPath + '/images/' + id + 'blgimg' + this.imgSelected.name)


  }

  imgUpload() {
    /*const id = +this.route.snapshot.paramMap.get('id');
    const url = `${this.beUrl}/upload/${id}`;
    const fd = new FormData();
    fd.append('image', this.imgSelected, this.imgSelected.name);
    console.log(this.imgSelected);
    this.http.post(url, fd, {reportProgress: true})
    .subscribe(r => {console.log(r)});*/
    const id = +this.route.snapshot.paramMap.get('id');
    this.blogService.imgUploadSvc(this.imgSelected, id)
    .subscribe(r => {
      console.log(r);
    });
    this.updateBlog();
  }
}