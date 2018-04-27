// import { Component } from '@angular/core';
//
// @Component({
//   selector: 'pm-root',
//   templateUrl: './app.component.html',
//   styleUrls: ['./app.component.css']
// })
// export class AppComponent {
//   title = 'Angular: Getting Started';
// }
import {Component} from '@angular/core';

@Component({
  moduleId: module.id,
  selector: 'pm-root',
  templateUrl: 'app.component.html'
})
export class AppComponent {
  pageTitle: string = 'OW User Profile Page';
}
