import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ConvertToSpacePipe } from './pipes/convert-to-space.pipe';

import { ProductComponent } from './product/product.component';
import { StarComponent } from './shared/star/star.component';
import {HttpClientModule} from '@angular/common/http'
//import { StarComponent } from './shared/star.component';
// import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

@NgModule({
  declarations: [
    AppComponent,
    ProductComponent,
    ConvertToSpacePipe,
    StarComponent,
   
   
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
    
    
   
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
