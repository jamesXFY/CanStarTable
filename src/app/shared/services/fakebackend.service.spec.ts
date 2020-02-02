import { TestBed } from '@angular/core/testing';

import { FakeBackendService } from './fakebackend.service';

describe('FakebackendService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: FakeBackendService = TestBed.get(FakeBackendService);
    expect(service).toBeTruthy();
  });
});
