import { TestBed } from '@angular/core/testing';

import { LogAuthService } from './log-auth.service';

describe('LogAuthService', () => {
  let service: LogAuthService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LogAuthService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
