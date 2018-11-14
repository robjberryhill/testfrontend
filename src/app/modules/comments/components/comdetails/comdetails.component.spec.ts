import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ComdetailsComponent } from './comdetails.component';

describe('ComdetailsComponent', () => {
  let component: ComdetailsComponent;
  let fixture: ComponentFixture<ComdetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ComdetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ComdetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
