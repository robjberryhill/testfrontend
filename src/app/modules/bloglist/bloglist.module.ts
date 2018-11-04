import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BlogPostsComponent } from './components/blog-posts/blog-posts.component';
import { BlogdetailsComponent } from './components/blogdetails/blogdetails.component';
import { AppRoutingModule } from 'src/app/app-routing.module';

@NgModule({
  imports: [
    CommonModule,
    AppRoutingModule   
  ],
  declarations: [BlogPostsComponent, BlogdetailsComponent],
  exports: [BlogPostsComponent]
})
export class BloglistModule { }
