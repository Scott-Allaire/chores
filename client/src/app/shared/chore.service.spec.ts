/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { ChoreService } from './chore.service';

describe('Service: Chore', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ChoreService]
    });
  });

  it('should ...', inject([ChoreService], (service: ChoreService) => {
    expect(service).toBeTruthy();
  }));
});
