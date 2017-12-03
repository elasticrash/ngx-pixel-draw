import { TestBed, inject } from '@angular/core/testing';

import { DecodePngService } from './decode-png.service';

describe('DecodePngService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [DecodePngService]
    });
  });

  it('should be created', inject([DecodePngService], (service: DecodePngService) => {
    expect(service).toBeTruthy();
  }));
});
