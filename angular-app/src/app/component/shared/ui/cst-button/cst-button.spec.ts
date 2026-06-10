import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CstButton } from './cst-button';

describe('CstButton', () => {
  let component: CstButton;
  let fixture: ComponentFixture<CstButton>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CstButton],
    }).compileComponents();

    fixture = TestBed.createComponent(CstButton);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
