import { TestBed } from '@angular/core/testing';

import { Multiplicacao } from './multiplicacao';

describe('Multiplicacao', () => {
  let service: Multiplicacao;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Multiplicacao);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
