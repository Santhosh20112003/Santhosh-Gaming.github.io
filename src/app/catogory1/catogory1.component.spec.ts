import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Catogory1Component } from './catogory1.component';

describe('Catogory1Component', () => {
  let component: Catogory1Component;
  let fixture: ComponentFixture<Catogory1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Catogory1Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Catogory1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
