import { TestBed } from '@angular/core/testing';

import { PeixeService } from './peixe.service';

describe('PeixeService', () => {
  let service: PeixeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PeixeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
