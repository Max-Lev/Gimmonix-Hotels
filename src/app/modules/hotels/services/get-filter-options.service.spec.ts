import { TestBed, inject } from '@angular/core/testing';

import { GetFilterOptionsService } from './get-filter-options.service';

describe('GetFilterOptionsService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [GetFilterOptionsService]
    });
  });

  it('should be created', inject([GetFilterOptionsService], (service: GetFilterOptionsService) => {
    expect(service).toBeTruthy();
  }));
});
