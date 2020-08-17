import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router, NavigationStart, NavigationEnd } from '@angular/router';
import { filter } from 'rxjs/operators';
import { Subscription } from 'rxjs';
declare var $: any;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit, OnDestroy {

  subscription: Subscription;
  show: boolean = true;

  constructor(private router: Router){}

  ngOnInit(){

    this.subscription = this.router.events.pipe(
      filter(event => event instanceof NavigationEnd)
    )
    .subscribe(() => window.scrollTo(0, 0));

    this.router.events
        .subscribe((event) => {
            if ( event instanceof NavigationStart ) {
              $('html').removeClass('nav-open');
            }
        });

    var $section_features = '';
		$().ready(function(){

    });
    

}

ngOnDestroy(){
 this.subscription.unsubscribe();
}

 
}
