import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';

import { ChoreService, Chore } from '../shared/chore.service';

@Component({
  selector: 'app-chore-detail',
  templateUrl: './chore-detail.component.html',
  styleUrls: ['./chore-detail.component.scss']
})
export class ChoreDetailComponent implements OnInit {

  chore:Chore = new Chore();

  constructor(
    private choreService: ChoreService,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    var component:ChoreDetailComponent = this;

    this.route.params
      .switchMap((params: Params) => this.choreService.getChore(params['id']))
      .subscribe(chore => {
        component.chore = chore
      });
  }

  onSubmit() {
    this.choreService.saveChore(this.chore)
      .subscribe(chore => {
        console.log(chore);
      })
  }
}
