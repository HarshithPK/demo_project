import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AreaInChargeComponent } from './area-in-charge.component';

describe('AreaInChargeComponent', () => {
  let component: AreaInChargeComponent;
  let fixture: ComponentFixture<AreaInChargeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AreaInChargeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AreaInChargeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
