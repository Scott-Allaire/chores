import { Injectable } from '@angular/core';
import { Headers, Http, Response } from '@angular/http';

import { Observer,Observable } from 'rxjs/Rx';
import * as moment from 'moment';

import { environment } from '../../environments/environment';

@Injectable()
export class ChoreService {

  constructor(
    private http:Http
  ) { }

  getAll():Observable<Array<Chore>> {
    var service:ChoreService = this;

    return Observable.create(function (observer,) {
      service.http.get(environment.baseApiUrl + "/chores")
        .subscribe(
          response => {
            observer.next(response.json());
            observer.complete();
          },
          error => {
            observer.error(error);
            observer.complete();
          }
        )
    });
  }

  getChore(id:string):Observable<Array<Chore>> {
    var service:ChoreService = this;

    return Observable.create(function (observer,) {
      service.http.get(environment.baseApiUrl + "/chores/" + id)
        .subscribe(
          response => {
            var chore:Chore = response.json();

            chore.nextDueString = moment(chore.nextDue).format('MM-DDYYYY');

            observer.next(chore);
            observer.complete();
          },
          error => {
            observer.error(error);
            observer.complete();
          }
        )
    });
  }

  saveChore(chore:Chore):Observable<Array<Chore>> {
    var service:ChoreService = this;

    return Observable.create(function (observer,) {
      chore.nextDue = moment(chore.nextDueString).toDate();

      console.log(chore);

      observer.next(chore);
      observer.complete();
    });
  }
}

export class Chore {
  _id: string;
  name: string;
  description: string;
  frequency: string;
  nextDue: Date;
  nextDueString: string;
}
