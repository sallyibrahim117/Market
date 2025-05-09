import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LandscapeImgComponent } from './landscape-img.component';

describe('LandscapeImgComponent', () => {
  let component: LandscapeImgComponent;
  let fixture: ComponentFixture<LandscapeImgComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LandscapeImgComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(LandscapeImgComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
