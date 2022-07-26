import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DivisionalHeadComponent } from './divisional-head.component';

describe('DivisionalHeadComponent', () => {
  let component: DivisionalHeadComponent;
  let fixture: ComponentFixture<DivisionalHeadComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DivisionalHeadComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DivisionalHeadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
