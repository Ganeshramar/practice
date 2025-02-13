import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserListDeclarativeComponent } from './user-list-declarative.component';

describe('UserListDeclarativeComponent', () => {
  let component: UserListDeclarativeComponent;
  let fixture: ComponentFixture<UserListDeclarativeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [UserListDeclarativeComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(UserListDeclarativeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
