import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from 'src/app/app-routing.module';
import { ComlistComponent } from './components/comlist/comlist.component';
import { ComdetailsComponent } from './components/comdetails/comdetails.component';
import { ComupdateComponent } from './components/comupdate/comupdate.component';
import { ComcreateComponent } from './components/comcreate/comcreate.component';

@NgModule({
  imports: [
    CommonModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  declarations: [ComlistComponent, ComdetailsComponent, ComupdateComponent, ComcreateComponent]
})
export class CommentsModule { }
