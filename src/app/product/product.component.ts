import { BindingFlags } from '@angular/compiler/src/core';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Product } from '../interfaces/Product';
import { ProductService } from '../services/product.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit,OnDestroy{

  sub:Subscription | undefined;
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
  products: Product[] = [
  ]
  
  ngOnInit(): void {
    this.ProductService.getproducts().subscribe(data=>{
      this.products=data;
      this.filteredProducts=this.products;

    });
  }
  onRatingClick(msg: string){
    this.pageTitle=msg;
  }
  ngOnDestroy():void{
this.sub?.unsubscribe;
  }
}
