import { HttpClient, HttpErrorResponse } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable, tap, throwError } from "rxjs";
import { Product } from "../interfaces/Product";
import { catchError } from "rxjs";
@Injectable({
    providedIn:'root'
})
export class ProductService{
    public productUrl='api/product.json';
    constructor(private http :HttpClient){

    }
products:Product[]=[];
    getproducts():Observable<Product[]>{
     return this.http.get<Product[]>(this.productUrl).pipe(
         tap(data=> console.log("All" , JSON.stringify(data))),
         catchError(this.handelError)
     );
        
    }
    private handelError(err:HttpErrorResponse){
        let errmsg='';
        if(err.error instanceof ErrorEvent){
            errmsg=`An Error Occured':${err.error.message}`
        }

        else{
            errmsg=`Server Returned Code:${err.status},error msg is: ${err.message}`
        }
        return throwError(errmsg);
    }
    
}