import { TestBed } from '@angular/core/testing';

import { PostedAdService } from './posted-ad.service';

describe('PostedAdService', () => {
  let service: PostedAdService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PostedAdService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
