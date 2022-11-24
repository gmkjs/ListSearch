import { TestBed } from '@angular/core/testing';

import { MergeapiService } from './mergeapi.service';

describe('MergeapiService', () => {
  let service: MergeapiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MergeapiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
