import { Component } from '@angular/core';
import { Router, RouteConfigLoadStart, RouteConfigLoadEnd } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  moduleLoading:boolean;
  constructor(private router: Router){
    this.router.events.subscribe(event => {
      if(event instanceof RouteConfigLoadStart) {
        this.moduleLoading = true;
          console.log("start==========>")
      }
      if(event instanceof RouteConfigLoadEnd) {
          console.log("end===========>")
          this.moduleLoading = false;
      }
    });
  }
}
