import { Injectable } from '@angular/core';
import { BlogPost } from '../../../shared/model/blog-post';
import { Observable, of } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';
import { environment } from '../../../../environments/environment';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class BlogService {
  private beUrl = environment.backendUrl;
  /*private blogPath = 'http://localhost:3001/blogList';*/
  private blogPath = this.beUrl + '/blogList';


  getBlogPosts(): Observable<BlogPost[]> {
    return this.http.get<BlogPost[]> (this.blogPath)
  };

  getViewBlogPosts(): Observable<BlogPost[]> {
    return this.http.get<BlogPost[]> (this.blogPath)
  };


  getBlogId(id: number): Observable<BlogPost> {
    const url = `${this.blogPath}/${id}`;
    return this.http.get<BlogPost>(url);
  }

  addBlogPost(blogPost: BlogPost): Observable<BlogPost> {
    return this.http.post<BlogPost>(this.blogPath, blogPost, httpOptions);
  }

  updateBlogPost(blogPost: BlogPost): Observable<any> {
    const url = `${this.blogPath}/${blogPost.blogId}`;
    return this.http.put(url, blogPost, httpOptions);
  }

  deleteBlogPost(id: number): Observable<any> {
    const url = `${this.blogPath}/${id}/delete`;
    return this.http.delete(url);
  }

  imgUploadSvc(imgToUpload: File, id: number): Observable<any> {
    const url = `${this.beUrl}/uploadBlgImg/${id}`;
    const fData = new FormData();
    fData.append('image', imgToUpload, imgToUpload.name)
    return this.http.post(url, fData, {reportProgress: true});
  }
  constructor(private http: HttpClient, private route: ActivatedRoute,) { }
}
