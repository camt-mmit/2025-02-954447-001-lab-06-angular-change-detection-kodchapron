import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TrialZero } from './trial-zero';

describe('TrialZero', () => {
  let component: TrialZero;
  let fixture: ComponentFixture<TrialZero>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TrialZero]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TrialZero);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
