import { TestBed } from '@angular/core/testing';

import { ExceptionalService } from './exceptional.service';

describe('ExceptionalService', () => {
  let service: ExceptionalService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ExceptionalService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
