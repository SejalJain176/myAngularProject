import { Injectable } from "@angular/core";
import { Product } from "../interfaces/Product";

@Injectable({
    providedIn:'root'
})
export class ProductService{
products:Product[]=[];
    getproducts():Product[]{
     return this.products = [{
            Name: "Bag",
            code: '1-abc',
            date: "12-09-2021",
            price: 70,
            Rating: 5,
            imageUrl: "assets/images/bag.jpg"
        },
        {
            Name: "Suit",
            code: "2-abc",
            date: "12-09-2021",
            price: 700,
            Rating: 4,
            imageUrl: "assets/images/suit.jpg"
        }
        ];
    }
}