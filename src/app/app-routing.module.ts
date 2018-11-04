import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomepageComponent } from './components/homepage/homepage.component';
import { BlogPostsComponent } from './modules/bloglist/components/blog-posts/blog-posts.component';
import { BlogdetailsComponent } from './modules/bloglist/components/blogdetails/blogdetails.component';

const routes: Routes = [
  {
    path: 'blogs',
    component: BlogPostsComponent
  },
  {
    path: 'home',
    component: HomepageComponent
  },
  {
    path: 'blogList/:id',
    component: BlogdetailsComponent
  },
  {
    path: '',
    redirectTo: '/home',
    pathMatch: 'full'
  }
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule { }
