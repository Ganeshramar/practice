import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CountDownSignalComponent } from './count-down-signal.component';

describe('CountDownSignalComponent', () => {
  let component: CountDownSignalComponent;
  let fixture: ComponentFixture<CountDownSignalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CountDownSignalComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(CountDownSignalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
