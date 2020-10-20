import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FoodBankLocationComponent } from './food-bank-location.component';

describe('FoodBankLocationComponent', () => {
  let component: FoodBankLocationComponent;
  let fixture: ComponentFixture<FoodBankLocationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FoodBankLocationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FoodBankLocationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
