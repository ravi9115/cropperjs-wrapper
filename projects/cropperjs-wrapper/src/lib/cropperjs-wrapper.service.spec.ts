import { TestBed } from '@angular/core/testing';

import { CropperjsWrapperService } from './cropperjs-wrapper.service';

describe('CropperjsWrapperService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CropperjsWrapperService = TestBed.get(CropperjsWrapperService);
    expect(service).toBeTruthy();
  });
});
