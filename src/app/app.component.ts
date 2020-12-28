import { Component, HostListener } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ViewportScroller  } from '@angular/common';
//import { slider, fader} from './route-animations';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  animations: [ // <-- add your animations here
    //fader,
    //slider,
    // transformer,
    //stepper
  ]
})
export class AppComponent {
  title = 'personalWebsite';  

  //Router Animation preparation 
  prepareRoute(outlet: RouterOutlet){
    return outlet && outlet.activatedRouteData && outlet.activatedRouteData['animation'];
  }

  
  //'Back to the top' event
  pageYoffset = 0;
  @HostListener('window:scroll', ['$event']) onScroll(event){
    this.pageYoffset = window.pageYOffset;
  }
  constructor(private scroll: ViewportScroller) { }

  scrollToTop(){
    this.scroll.scrollToPosition([0,0]);
  }

  
  //Scroll to the top after route change
  onActivate(event) {
        let scrollToTop = window.setInterval(() => {
            let pos = window.pageYOffset;
            if (pos > 0) {
                window.scrollTo(0, pos - 20); // how far to scroll on each step
            } else {
                window.clearInterval(scrollToTop);
            }
        }, 6);
  }
  

}
