import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CartSampleComponent } from './cart-sample.component';

describe('CartSampleComponent', () => {
  let component: CartSampleComponent;
  let fixture: ComponentFixture<CartSampleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CartSampleComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CartSampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
