import { ComponentFixture, TestBed } from '@angular/core/testing';

import { visibleComponent } from './visible-component.component';

describe('visibleComponent', () => {
  let component: visibleComponent;
  let fixture: ComponentFixture<visibleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [visibleComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(visibleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
