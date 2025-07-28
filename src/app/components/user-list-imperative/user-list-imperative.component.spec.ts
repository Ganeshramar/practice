import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserListImperativeComponent } from './user-list-imperative.component';

describe('UserListImperativeComponent', () => {
  let component: UserListImperativeComponent;
  let fixture: ComponentFixture<UserListImperativeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [UserListImperativeComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(UserListImperativeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
