import { TestBed } from '@angular/core/testing';

import { FakeRequestService } from './fake-request.service';

describe('FakeRequestService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: FakeRequestService = TestBed.get(FakeRequestService);
    expect(service).toBeTruthy();
  });
});
