import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Catogory4Component } from './catogory4.component';

describe('Catogory4Component', () => {
  let component: Catogory4Component;
  let fixture: ComponentFixture<Catogory4Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Catogory4Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Catogory4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
