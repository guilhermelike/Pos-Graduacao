import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Multiplicacao } from './multiplicacao';

describe('Multiplicacao', () => {
  let component: Multiplicacao;
  let fixture: ComponentFixture<Multiplicacao>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Multiplicacao]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Multiplicacao);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
