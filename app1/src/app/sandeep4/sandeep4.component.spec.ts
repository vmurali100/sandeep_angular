import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Sandeep4Component } from './sandeep4.component';

describe('Sandeep4Component', () => {
  let component: Sandeep4Component;
  let fixture: ComponentFixture<Sandeep4Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Sandeep4Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Sandeep4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
