import { Component, OnInit, HostBinding } from '@angular/core';
import { slideInDownAnimation } from '../../animations';


@Component({
  selector: 'dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
  animations: [slideInDownAnimation]

})
export class DashboardComponent implements OnInit {
  @HostBinding('@routeAnimation') routeAnimation = true;
  @HostBinding('style.display') display = 'block';
  @HostBinding('style.position') position = 'absolute';


  constructor() { }

  ngOnInit() {
  }

}
