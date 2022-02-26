import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {

  constructor( private route:ActivatedRoute) { }
  pageTitle="Product";
  ngOnInit(): void {
    
    const id=Number(this.route.snapshot.paramMap.get('id'));
    this.pageTitle=this.pageTitle +":" + id;

  }

}