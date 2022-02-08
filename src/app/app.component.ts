import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template:`
  <ul class='nav-navbar-nav'>
    <li><a [routerLink]="['/welcome']">Home</a></li>
    <li><a [routerLink]="['/products']">Product List</a></li>
  </ul>
  <div>
    <router-outlet></router-outlet>
  </div>
    `
    ,
  
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'myProject';

 
}
