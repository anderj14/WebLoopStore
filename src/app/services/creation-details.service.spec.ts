import { TestBed } from '@angular/core/testing';

import { CreationDetailsService } from './creation-details.service';

describe('CreationDetailsService', () => {
  let service: CreationDetailsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CreationDetailsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
