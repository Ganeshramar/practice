import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResuableFormComponent } from './resuable-form.component';

describe('ResuableFormComponent', () => {
  let component: ResuableFormComponent;
  let fixture: ComponentFixture<ResuableFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ResuableFormComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ResuableFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
