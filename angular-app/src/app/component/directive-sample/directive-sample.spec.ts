import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DirectiveSample } from './directive-sample';

describe('DirectiveSample', () => {
  let component: DirectiveSample;
  let fixture: ComponentFixture<DirectiveSample>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DirectiveSample],
    }).compileComponents();

    fixture = TestBed.createComponent(DirectiveSample);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
