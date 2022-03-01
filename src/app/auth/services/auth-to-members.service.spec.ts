import { TestBed } from '@angular/core/testing';

import { AuthToMembersService } from './auth-to-members.service';

describe('AuthToMembersService', () => {
  let service: AuthToMembersService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AuthToMembersService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
