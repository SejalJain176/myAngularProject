import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ConvertToSpacePipe } from './pipes/convert-to-space.pipe';

import { ProductComponent } from './product/product.component';
import { StarComponent } from './shared/star/star.component';
import {HttpClientModule} from '@angular/common/http'
import { RouterModule } from '@angular/router';
import { ProductListComponentComponent } from './product/product-list-component.component';
import { WelcomeComponentComponent } from './welcome-component/welcome-component.component';
//import { StarComponent } from './shared/star.component';
// import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

@NgModule({
  declarations: [
    AppComponent,
    ProductComponent,
    ConvertToSpacePipe,
    StarComponent,
    ProductListComponentComponent,
    WelcomeComponentComponent
   
   
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    
    RouterModule.forRoot([
      {path:'products',component:ProductComponent},
      // {path:'products/:id',component:ProductDetailComponent},
      {path:'welcome',component:WelcomeComponentComponent},
      {path:'',redirectTo:'welcome',pathMatch:'full'},
      {path:'**',redirectTo:'welcome',pathMatch:'full'}

    ])
    
    
   
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
