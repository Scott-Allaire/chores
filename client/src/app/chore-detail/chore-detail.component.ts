import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, Params } from '@angular/router';

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
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit() {
    var component:ChoreDetailComponent = this;

    this.route.params
      .switchMap((params: Params) => this.choreService.getChore(params['id']))
      .subscribe(chore => {
        component.chore = chore;
      });
  }

  onSubmit() {
    var component:ChoreDetailComponent = this;
    
    this.choreService.saveChore(this.chore)
      .subscribe(chore => {
        this.router.navigate(['/chores']);
      })
  }
}
