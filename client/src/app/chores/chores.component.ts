import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';

import {ChoreService, Chore} from '../shared/chore.service';

@Component({
    selector: 'app-chores',
    templateUrl: './chores.component.html',
    styleUrls: ['./chores.component.scss']
})
export class ChoresComponent implements OnInit {

    chores: Array<Chore>;

    constructor(private choreService: ChoreService,
                private router: Router) {
    }

    private refreshList() {
        this.choreService.getAll()
            .subscribe(
                chores => {
                    this.chores = chores;
                },
                error => {
                    console.log(error);
                }
            );

    }

    ngOnInit() {
        this.refreshList();
    }

    onSelect(chore: Chore) {
        this.router.navigate(['/chore-detail', chore._id]);
    }

    onNew() {
        this.router.navigate(['/chore-detail']);
    }

    onDelete(chore: Chore) {
        if (confirm('Are you sure you want to delete this chore?')) {
            this.choreService.removeChore(chore._id)
                .subscribe(
                    chores => {
                        this.refreshList();
                    },
                    error => {
                        console.log(error);
                    }
                )
        }
    }
}
