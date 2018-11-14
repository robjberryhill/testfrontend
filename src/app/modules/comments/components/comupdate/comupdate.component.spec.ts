import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ComupdateComponent } from './comupdate.component';

describe('ComupdateComponent', () => {
  let component: ComupdateComponent;
  let fixture: ComponentFixture<ComupdateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ComupdateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ComupdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
