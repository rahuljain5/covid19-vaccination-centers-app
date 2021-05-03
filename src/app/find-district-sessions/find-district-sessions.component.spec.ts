import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FindDistrictSessionsComponent } from './find-district-sessions.component';

describe('FindDistrictSessionsComponent', () => {
  let component: FindDistrictSessionsComponent;
  let fixture: ComponentFixture<FindDistrictSessionsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FindDistrictSessionsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FindDistrictSessionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
