import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AllKnobsComponent } from './all-knobs.component';

describe('AllKnobsComponent', () => {
  let component: AllKnobsComponent;
  let fixture: ComponentFixture<AllKnobsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AllKnobsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AllKnobsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
