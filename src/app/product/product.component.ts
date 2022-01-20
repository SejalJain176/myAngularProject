import { BindingFlags } from '@angular/compiler/src/core';
import { Component, OnInit } from '@angular/core';
import { Product } from '../interfaces/Product';
import { ProductService } from '../services/product.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  
  performFilter(v: string): Product[] {
    v = v.toLocaleLowerCase();
    return this.products.filter((product: Product) => product.Name.toLocaleLowerCase().includes(v));
  }
  pageTitle="Product List"
  show = false;
  width = 50;
  margin = 2;
  public _listFilter = "";
  filteredProducts: Product[] = [];
  getlistFilter(): string {
    return this._listFilter;
  }
  setlistFilter(v:Event) {
    this._listFilter = (v.target as HTMLInputElement).value.toLocaleLowerCase();
    this.filteredProducts = this.performFilter(this._listFilter);
  }

  showImg() {
    this.show = !this.show;
  }
  constructor( private ProductService:ProductService) { }
  products: Product[] = [{
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
  ]
  ngOnInit(): void {
  }
  onRatingClick(msg: string){
    this.pageTitle=msg;
  }
}
