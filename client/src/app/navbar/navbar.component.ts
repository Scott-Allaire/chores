import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'ch-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  isCollapsed:boolean = true;
  
  constructor() { }

  ngOnInit() {
  }

}
