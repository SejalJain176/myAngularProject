import { Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-star',
  templateUrl: './star.component.html',
  styleUrls: ['./star.component.css']
})
export class StarComponent implements OnInit, OnChanges {

  constructor() { }

  ngOnInit(): void {
  }
  @Input() rating:number= 0;
  cropWidth:number=75;
@Output() ratingClick: EventEmitter<string>=new EventEmitter<string>();
  ngOnChanges(): void {
    this.cropWidth = this.rating * 75 / 5;
  }
  onClick(){
    this.ratingClick.emit(`the rating ${this.rating}`)
  }
}
