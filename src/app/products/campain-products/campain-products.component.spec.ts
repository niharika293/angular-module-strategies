import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CampainProductsComponent } from './campain-products.component';

describe('CampainProductsComponent', () => {
  let component: CampainProductsComponent;
  let fixture: ComponentFixture<CampainProductsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CampainProductsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CampainProductsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
