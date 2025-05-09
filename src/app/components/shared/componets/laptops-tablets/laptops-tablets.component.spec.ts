import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LaptopsTabletsComponent } from './laptops-tablets.component';

describe('LaptopsTabletsComponent', () => {
  let component: LaptopsTabletsComponent;
  let fixture: ComponentFixture<LaptopsTabletsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LaptopsTabletsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(LaptopsTabletsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
