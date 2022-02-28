import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';


@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {

  constructor( private route:ActivatedRoute,private router:Router) { }
  pageTitle="Product Detail";
  ngOnInit(): void {
    
    const id=Number(this.route.snapshot.paramMap.get('id'));
    this.pageTitle=this.pageTitle +":" + id ;

  }

  onBack(){
    this.router.navigate(["/products"]);
  }

}
