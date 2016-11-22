import { Injectable } from '@angular/core';
import { Headers, Http, Response } from '@angular/http';

import { Observer,Observable } from 'rxjs/Rx';

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

}

export class Chore {
  _id: string;
  name: string;
  description: string;
  frequency: string;
  nextDue: Date;
}
