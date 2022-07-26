import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SafetyOfficerComponent } from './safety-officer.component';

describe('SafetyOfficerComponent', () => {
  let component: SafetyOfficerComponent;
  let fixture: ComponentFixture<SafetyOfficerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SafetyOfficerComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SafetyOfficerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
