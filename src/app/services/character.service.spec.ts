import { TestBed } from '@angular/core/testing';

import { CharacterService } from './characterList.service';

describe('CharacterServiceService', () => {
  let service: CharacterService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CharacterService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
