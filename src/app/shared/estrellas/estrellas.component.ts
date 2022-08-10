import { Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges } from '@angular/core';
/* import { faStar } from '@fortawesome/free-regular-svg-icons'; */
import { faStar } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-estrellas',
  templateUrl: './estrellas.component.html',
  styleUrls: ['./estrellas.component.css']
})
export class EstrellasComponent implements OnChanges {

  faStar = faStar;
  starList: any[] = [];
  
  @Input() calificacion: number = 0;
  @Output() starsClick = new EventEmitter<string>(); 

  constructor() { }

  ngOnChanges(changes: SimpleChanges): void {
    this.starList = [];
    for(var i = 1; i<=this.calificacion; i++){
      this.starList.push(1);
    }
  }
  onClick( stars: number ):void {
    this.starsClick.emit("calificacion" + stars);
  }
}
