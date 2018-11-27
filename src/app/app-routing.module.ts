import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomepageComponent } from './components/homepage/homepage.component';
import { BlogPostsComponent } from './modules/bloglist/components/blog-posts/blog-posts.component';
import { BlogdetailsComponent } from './modules/bloglist/components/blogdetails/blogdetails.component';
import { BlogupdateComponent } from './modules/bloglist/components/blogupdate/blogupdate.component';
import { BlogcreateComponent } from './modules/bloglist/components/blogcreate/blogcreate.component';
import { UserlistComponent } from './modules/users/components/userlist/userlist.component';
import { UserprofileComponent } from './modules/users/components/userprofile/userprofile.component';
import { UsersignupComponent } from './modules/users/components/usersignup/usersignup.component';
import { UserupdateComponent } from './modules/users/components/userupdate/userupdate.component';
import { ComlistComponent } from './modules/comments/components/comlist/comlist.component';
import { ComdetailsComponent } from './modules/comments/components/comdetails/comdetails.component';
import { ComupdateComponent } from './modules/comments/components/comupdate/comupdate.component';
import { ComcreateComponent } from './modules/comments/components/comcreate/comcreate.component';
import { BlogbioComponent } from './components/blogbio/blogbio.component';

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
    path: 'bio',
    component: BlogbioComponent
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
    path: 'signup',
    component: UsersignupComponent
  },
  {
    path: 'userUpdate/:id',
    component: UserupdateComponent
  },
  {
    path: 'comments',
    component: ComlistComponent
  },
  {
    path: 'comments/:id',
    component: ComdetailsComponent
  },
  {
    path: 'comUpdate/:id',
    component: ComupdateComponent
  },
  {
    path: 'comCreate',
    component: ComcreateComponent
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
