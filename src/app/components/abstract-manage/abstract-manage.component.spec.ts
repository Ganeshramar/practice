import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AbstractManageComponent } from './abstract-manage.component';

describe('AbstractManageComponent', () => {
  let component: AbstractManageComponent;
  let fixture: ComponentFixture<AbstractManageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AbstractManageComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AbstractManageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
