import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ComcreateComponent } from './comcreate.component';

describe('ComcreateComponent', () => {
  let component: ComcreateComponent;
  let fixture: ComponentFixture<ComcreateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ComcreateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ComcreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
