import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserListSignalsComponent } from './user-list-signals.component';

describe('UserListSignalsComponent', () => {
  let component: UserListSignalsComponent;
  let fixture: ComponentFixture<UserListSignalsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [UserListSignalsComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(UserListSignalsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
