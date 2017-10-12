import {Injectable} from '@angular/core';
import {Http} from '@angular/http';

import {Observable} from 'rxjs/Rx';
import * as moment from 'moment';

import {environment} from '../../environments/environment';

@Injectable()
export class ChoreService {

    constructor(private http: Http) {
    }

    list(): Observable<Array<Chore>> {
        return this.http.get(environment.baseApiUrl + "/chores")
            .map(resp => resp.json());
    }

    get(id: string): Observable<Chore> {
        return this.http.get(environment.baseApiUrl + "/chores/" + id)
            .map(resp => this.transform(resp.json()));
    }

    update(chore: Chore): Observable<Chore> {
        chore.nextDue = moment(chore.nextDueString).toDate();
        return this.http.put(environment.baseApiUrl + "/chores/" + chore._id, chore)
            .map(resp => this.transform(resp.json()));
    }

    create(chore: Chore): Observable<Chore> {
        chore.nextDue = moment(chore.nextDueString).toDate();
        return this.http.post(environment.baseApiUrl + "/chores", chore)
            .map(resp => this.transform(resp.json()));
    }

    remove(choreId: string): Observable<Chore> {
        return this.http.delete(environment.baseApiUrl + "/chores/" + choreId)
            .map(resp => this.transform(resp.json()));
    }

    transform(chore: Chore) {
        chore.nextDueString = moment(chore.nextDue).format('MM-DDYYYY');
        return chore;
    }
}

export class Chore {
    _id?: string;
    name?: string;
    description?: string;
    frequency?: string;
    nextDue?: Date;
    nextDueString?: string;
}
