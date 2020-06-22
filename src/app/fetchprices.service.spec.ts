import { TestBed } from '@angular/core/testing';

import { FetchpricesService } from './fetchprices.service';

describe('FetchpricesService', () => {
  let service: FetchpricesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FetchpricesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
