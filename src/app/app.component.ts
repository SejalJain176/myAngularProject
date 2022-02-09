import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `

<nav class="navbar navbar-expand-lg navbar-dark bg-dark">
  <a class="navbar-brand" href="#">My Site</a>
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>

  <div class="collapse navbar-collapse" id="navbarSupportedContent">
    <ul class="navbar-nav mr-auto">
      <li class="nav-item active">
        <a class="nav-link" href="#" [routerLink]="['/welcome']">Home <span class="sr-only">(current)</span></a>
      <li class="nav-item active">
        <a class="nav-link" href="#" [routerLink]="['/products']">Products </a>
      </li>
     
     
    </ul>
    
  </div>
</nav>
  <div>
    <router-outlet></router-outlet>
  
    `
  ,

  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'myProject';


}
