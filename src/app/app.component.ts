import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'The Blog';
  staticPath: string = 'http://localhost:3001/blogList';
  /*staticPath: string = 'http://ec2-18-223-162-216.us-east-2.compute.amazonaws.com:3001';*/
}
