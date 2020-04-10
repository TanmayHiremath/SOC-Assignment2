import { Component, OnInit } from '@angular/core';
import $ from 'jquery';
@Component({
  selector: 'app-alumination',
  templateUrl: './alumination.component.html',
  styleUrls: ['./alumination.component.css']
})
export class AluminationComponent implements OnInit {
  menuOpen=false;img0=false;img1=false;img2=false;
  

  
  constructor() {
   }

  ngOnInit(): void {
    
  

}

onClickHamburger() {
  this.menuOpen=true;
}
onClickClose() {
  this.menuOpen=false;
}
}
