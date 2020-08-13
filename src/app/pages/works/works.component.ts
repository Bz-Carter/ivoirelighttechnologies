import { Component, OnInit } from '@angular/core';
declare var $, materialKitDemo, big_image, window_width, BrowserDetect:any;


@Component({
  selector: 'app-works',
  templateUrl: './works.component.html',
  styleUrls: ['./works.component.scss']
})
export class WorksComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    
    $(document).ready(function(){
      BrowserDetect.init();
 
      // Init Material scripts for buttons ripples, inputs animations etc, more info on the next link https://github.com/FezVrasta/bootstrap-material-design#materialjs
      $.material.init();

      if (window_width >= 768){
        big_image = $('.page-header[data-parallax="true"]');
        if(big_image.length != 0){
           $(window).on('scroll', materialKitDemo.checkScrollForParallax);
        }

    }
      
  });

  }

}
