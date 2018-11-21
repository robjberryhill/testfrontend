import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ComlistComponent } from './comlist.component';

describe('ComlistComponent', () => {
  let component: ComlistComponent;
  let fixture: ComponentFixture<ComlistComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ComlistComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ComlistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
