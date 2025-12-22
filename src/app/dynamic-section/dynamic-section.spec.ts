import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DynamicSection } from './dynamic-section';

describe('DynamicSection', () => {
  let component: DynamicSection;
  let fixture: ComponentFixture<DynamicSection>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DynamicSection]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DynamicSection);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
