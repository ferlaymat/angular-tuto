import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeferSample } from './defer-sample';

describe('DeferSample', () => {
  let component: DeferSample;
  let fixture: ComponentFixture<DeferSample>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DeferSample],
    }).compileComponents();

    fixture = TestBed.createComponent(DeferSample);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
