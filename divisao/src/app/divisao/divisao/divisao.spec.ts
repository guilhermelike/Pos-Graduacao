import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Divisao } from './divisao';

describe('Divisao', () => {
  let component: Divisao;
  let fixture: ComponentFixture<Divisao>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Divisao]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Divisao);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
