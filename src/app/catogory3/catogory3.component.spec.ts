import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Catogory3Component } from './catogory3.component';

describe('Catogory3Component', () => {
  let component: Catogory3Component;
  let fixture: ComponentFixture<Catogory3Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Catogory3Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Catogory3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
