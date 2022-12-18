import { TestBed } from '@angular/core/testing';

import { GetapService } from './getap.service';

describe('GetapService', () => {
  let service: GetapService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GetapService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
