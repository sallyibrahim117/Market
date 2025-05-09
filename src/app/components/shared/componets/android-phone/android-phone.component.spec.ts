import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AndroidPhoneComponent } from './android-phone.component';

describe('AndroidPhoneComponent', () => {
  let component: AndroidPhoneComponent;
  let fixture: ComponentFixture<AndroidPhoneComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AndroidPhoneComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AndroidPhoneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
