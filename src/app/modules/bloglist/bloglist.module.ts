import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BlogPostsComponent } from './components/blog-posts/blog-posts.component';
import { BlogdetailsComponent } from './components/blogdetails/blogdetails.component';
import { AppRoutingModule } from 'src/app/app-routing.module';
import { BlogupdateComponent } from './components/blogupdate/blogupdate.component';
import { BlogcreateComponent } from './components/blogcreate/blogcreate.component';

@NgModule({
  imports: [
    CommonModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule    
  ],
  declarations: [
    BlogPostsComponent,
    BlogdetailsComponent,
    BlogupdateComponent,
    BlogcreateComponent
  ],
  exports: [BlogPostsComponent]
})
export class BloglistModule { }
