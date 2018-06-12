import { TestBed, inject } from '@angular/core/testing';

import { TerminosService } from './terminos.service';

describe('TerminosService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [TerminosService]
    });
  });

  it('should be created', inject([TerminosService], (service: TerminosService) => {
    expect(service).toBeTruthy();
  }));
});
