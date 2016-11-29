import { Injectable } from '@angular/core';
import { Headers, Http, Response } from '@angular/http';

import { Observer, Observable } from 'rxjs/Rx';
import * as moment from 'moment';

import { environment } from '../../environments/environment';

@Injectable()
export class ChoreService {

  constructor(
    private http: Http
  ) { }

  getAll(): Observable<Array<Chore>> {
    var service: ChoreService = this;

    return Observable.create(function (observer, ) {
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

  getChore(id: string): Observable<Array<Chore>> {
    var service: ChoreService = this;

    return Observable.create(function (observer, ) {
      service.http.get(environment.baseApiUrl + "/chores/" + id)
        .subscribe(
        response => {
          var chore: Chore = response.json();

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

  saveChore(chore: Chore): Observable<Chore> {
    var service: ChoreService = this;

    return Observable.create(function (observer, ) {
      chore.nextDue = moment(chore.nextDueString).toDate();
      var observable;

      if (chore._id) {
        observable = service.http.put(
          environment.baseApiUrl + "/chores/" + chore._id, chore);
      } else {
        observable = service.http.post(
          environment.baseApiUrl + "/chores", chore);
      }
      
      observable.subscribe(
          response => {
            var chore: Chore = response.json();

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

  removeChore(choreId:string): Observable<Chore> {
    var service: ChoreService = this;

    return Observable.create(function (observer, ) {
      service.http.delete(environment.baseApiUrl + "/chores/" + choreId)
        .subscribe(
          response => {
            observer.next();
            observer.complete();
          },
          error => {
            observer.error(error);
            observer.complete();
          }
        )
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
