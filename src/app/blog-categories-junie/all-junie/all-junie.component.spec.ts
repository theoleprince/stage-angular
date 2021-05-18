import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AllJunieComponent } from './all-junie.component';

describe('AllJunieComponent', () => {
  let component: AllJunieComponent;
  let fixture: ComponentFixture<AllJunieComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AllJunieComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AllJunieComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
