import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SellingFeatureComponent } from './selling-feature.component';

describe('SellingFeatureComponent', () => {
  let component: SellingFeatureComponent;
  let fixture: ComponentFixture<SellingFeatureComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SellingFeatureComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SellingFeatureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
