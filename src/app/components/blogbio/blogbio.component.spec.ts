import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BlogbioComponent } from './blogbio.component';

describe('BlogbioComponent', () => {
  let component: BlogbioComponent;
  let fixture: ComponentFixture<BlogbioComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BlogbioComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BlogbioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
