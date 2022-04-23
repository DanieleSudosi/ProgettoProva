import { TestBed } from '@angular/core/testing';

import { ServizioPrivatoService } from './servizio-privato.service';

describe('ServizioPrivatoService', () => {
  let service: ServizioPrivatoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ServizioPrivatoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
