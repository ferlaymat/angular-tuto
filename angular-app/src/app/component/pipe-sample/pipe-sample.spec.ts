import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PipeSample } from './pipe-sample';

describe('PipeSample', () => {
  let component: PipeSample;
  let fixture: ComponentFixture<PipeSample>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PipeSample],
    }).compileComponents();

    fixture = TestBed.createComponent(PipeSample);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
