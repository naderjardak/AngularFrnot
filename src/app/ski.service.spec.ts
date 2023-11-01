import { TestBed } from '@angular/core/testing';

import { SkiService } from './ski.service';

describe('SkiService', () => {
  let service: SkiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SkiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
