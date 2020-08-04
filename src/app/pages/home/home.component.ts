import { Component, OnInit } from '@angular/core';
declare var $, BrowserDetect:any;

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {

    $(document).ready(function(){
      BrowserDetect.init();
 
      // Init Material scripts for buttons ripples, inputs animations etc, more info on the next link https://github.com/FezVrasta/bootstrap-material-design#materialjs
      $.material.init();
 
 
      // Active Carousel
    $('.carousel').carousel({
        interval: 3000
      });
      
  });
    
  }

}
