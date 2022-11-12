import { TestBed } from '@angular/core/testing';

import { GetmethService } from './getmeth.service';

describe('GetmethService', () => {
  let service: GetmethService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GetmethService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
