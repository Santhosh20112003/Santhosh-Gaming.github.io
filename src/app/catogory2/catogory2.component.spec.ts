import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Catogory2Component } from './catogory2.component';

describe('Catogory2Component', () => {
  let component: Catogory2Component;
  let fixture: ComponentFixture<Catogory2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Catogory2Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Catogory2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
