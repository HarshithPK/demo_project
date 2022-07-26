import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WorkReceiverComponent } from './work-receiver.component';

describe('WorkReceiverComponent', () => {
  let component: WorkReceiverComponent;
  let fixture: ComponentFixture<WorkReceiverComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WorkReceiverComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WorkReceiverComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
