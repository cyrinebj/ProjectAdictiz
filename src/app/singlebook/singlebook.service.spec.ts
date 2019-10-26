import { TestBed } from '@angular/core/testing';

import { SinglebookService } from './singlebook.service';

describe('SinglebookService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: SinglebookService = TestBed.get(SinglebookService);
    expect(service).toBeTruthy();
  });
});
