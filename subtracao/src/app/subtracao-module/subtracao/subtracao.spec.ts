import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Subtracao } from './subtracao';

describe('Subtracao', () => {
  let component: Subtracao;
  let fixture: ComponentFixture<Subtracao>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Subtracao]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Subtracao);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
