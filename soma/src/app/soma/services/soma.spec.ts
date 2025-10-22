import { TestBed } from '@angular/core/testing';

import { Soma } from './soma';

describe('Soma', () => {
  let service: Soma;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Soma);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
