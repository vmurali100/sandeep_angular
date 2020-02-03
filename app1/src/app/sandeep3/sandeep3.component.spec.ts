import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Sandeep3Component } from './sandeep3.component';

describe('Sandeep3Component', () => {
  let component: Sandeep3Component;
  let fixture: ComponentFixture<Sandeep3Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Sandeep3Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Sandeep3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
