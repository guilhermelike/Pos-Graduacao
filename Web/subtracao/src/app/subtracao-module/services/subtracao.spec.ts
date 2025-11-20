import { TestBed } from '@angular/core/testing';

import { Subtracao } from './subtracao';

describe('Subtracao', () => {
  let service: Subtracao;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Subtracao);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
