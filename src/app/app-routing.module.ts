import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomepageComponent } from './components/homepage/homepage.component';
import { BlogPostsComponent } from './modules/bloglist/components/blog-posts/blog-posts.component';
import { BlogdetailsComponent } from './modules/bloglist/components/blogdetails/blogdetails.component';
import { BlogupdateComponent } from './modules/bloglist/components/blogupdate/blogupdate.component';
import { BlogcreateComponent } from './modules/bloglist/components/blogcreate/blogcreate.component';
import { UserlistComponent } from './modules/users/components/userlist/userlist.component';
import { UserprofileComponent } from './modules/users/components/userprofile/userprofile.component';

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
    path: 'blogCreate',
    component: BlogcreateComponent
  },
  {
    path: 'blogUpdate/:id',
    component: BlogupdateComponent
  },
  {
    path: 'blogList/:id',
    component: BlogdetailsComponent
  },
  {
    path: 'users',
    component: UserlistComponent
  },
  {
    path: 'profile/:id',
    component: UserprofileComponent
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
