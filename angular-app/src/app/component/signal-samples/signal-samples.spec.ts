import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SignalSamples } from './signal-samples';

describe('SignalSamples', () => {
  let component: SignalSamples;
  let fixture: ComponentFixture<SignalSamples>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SignalSamples],
    }).compileComponents();

    fixture = TestBed.createComponent(SignalSamples);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
