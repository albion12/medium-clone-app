import { TestBed } from '@angular/core/testing';

import { ConduitService } from './conduit.service';

describe('ConduitService', () => {
  let service: ConduitService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ConduitService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
