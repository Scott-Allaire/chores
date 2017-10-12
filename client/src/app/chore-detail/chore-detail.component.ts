import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, Params } from '@angular/router';

import { ChoreService, Chore } from '../shared/chore.service';
import {el} from "@angular/platform-browser/testing/src/browser_util";

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
      .switchMap((params: Params) => this.choreService.get(params['id']))
      .subscribe(chore => {
        component.chore = chore;
      });
  }

  onSubmit() {
    if (this.chore._id) {
      this.choreService.update(this.chore)
          .subscribe(() => {
              this.router.navigate(['/chores']);
          })
    } else {
        this.choreService.create(this.chore)
            .subscribe(() => {
                this.router.navigate(['/chores']);
            })
    }
  }

  onCancel() {
    this.router.navigate(['/chores']);
  }
}
