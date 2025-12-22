import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TrialTwo } from './trial-two';

describe('TrialTwo', () => {
  let component: TrialTwo;
  let fixture: ComponentFixture<TrialTwo>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TrialTwo],
    }).compileComponents();

    fixture = TestBed.createComponent(TrialTwo);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
