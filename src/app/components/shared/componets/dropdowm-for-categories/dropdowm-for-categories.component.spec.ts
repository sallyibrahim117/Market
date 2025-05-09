import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DropdowmForCategoriesComponent } from './dropdowm-for-categories.component';

describe('DropdowmForCategoriesComponent', () => {
  let component: DropdowmForCategoriesComponent;
  let fixture: ComponentFixture<DropdowmForCategoriesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DropdowmForCategoriesComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DropdowmForCategoriesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
