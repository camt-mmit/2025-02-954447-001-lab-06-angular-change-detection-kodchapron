import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TrialThree } from './trial-three';

describe('TrialThree', () => {
  let component: TrialThree;
  let fixture: ComponentFixture<TrialThree>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TrialThree]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TrialThree);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
