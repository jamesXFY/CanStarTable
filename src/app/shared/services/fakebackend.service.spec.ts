import { TestBed } from '@angular/core/testing';

import { FakebackendService } from './fakebackend.service';

describe('FakebackendService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: FakebackendService = TestBed.get(FakebackendService);
    expect(service).toBeTruthy();
  });
});
