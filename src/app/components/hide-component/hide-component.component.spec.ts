import { ComponentFixture, TestBed } from '@angular/core/testing';

import { hideComponent } from './hide-component.component';

describe('hideComponent', () => {
  let component: hideComponent;
  let fixture: ComponentFixture<hideComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [hideComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(hideComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
