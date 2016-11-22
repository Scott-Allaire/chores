import { Component, OnInit } from '@angular/core';

import { ChoreService, Chore } from '../shared/chore.service';

@Component({
  selector: 'app-chores',
  templateUrl: './chores.component.html',
  styleUrls: ['./chores.component.scss']
})
export class ChoresComponent implements OnInit {
  
  chores:Array<Chore>;

  constructor(private choreService:ChoreService) { }

  ngOnInit() {
    this.choreService.getAll()
      .subscribe(
        chores => {
          this.chores = chores;
        },
        error => {
          console.log(error);
        }
      )
  }

}
