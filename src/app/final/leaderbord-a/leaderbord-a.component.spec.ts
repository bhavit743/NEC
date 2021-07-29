import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LeaderbordAComponent } from './leaderbord-a.component';

describe('LeaderbordAComponent', () => {
  let component: LeaderbordAComponent;
  let fixture: ComponentFixture<LeaderbordAComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LeaderbordAComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LeaderbordAComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
