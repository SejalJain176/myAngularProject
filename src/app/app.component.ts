import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template:`<div><h1>{{title}}</h1>
  <app-product></app-product></div>`,
  
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'myProject';

 
}
