import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WorkInitiatorComponent } from './work-initiator.component';

describe('WorkInitiatorComponent', () => {
  let component: WorkInitiatorComponent;
  let fixture: ComponentFixture<WorkInitiatorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WorkInitiatorComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WorkInitiatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
