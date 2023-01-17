import { TestBed } from '@angular/core/testing';

import { MultimediaService } from './multimedia.service';

describe('MultimediaService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: MultimediaService = TestBed.get(MultimediaService);
    expect(service).toBeTruthy();
  });
});
