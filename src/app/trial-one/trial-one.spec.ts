import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TrialOne } from './trial-one';

describe('TrialOne', () => {
  let component: TrialOne;
  let fixture: ComponentFixture<TrialOne>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TrialOne],
    }).compileComponents();

    fixture = TestBed.createComponent(TrialOne);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
