import { TestBed } from '@angular/core/testing';

import { CalendrieService } from './calendrie.service';

describe('CalendrieService', () => {
  let service: CalendrieService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CalendrieService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
