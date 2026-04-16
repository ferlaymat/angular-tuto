import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BoardDynamic } from './board-dynamic';

describe('BoardDynamic', () => {
  let component: BoardDynamic;
  let fixture: ComponentFixture<BoardDynamic>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BoardDynamic],
    }).compileComponents();

    fixture = TestBed.createComponent(BoardDynamic);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
