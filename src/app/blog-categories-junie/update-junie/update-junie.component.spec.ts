import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateJunieComponent } from './update-junie.component';

describe('UpdateJunieComponent', () => {
  let component: UpdateJunieComponent;
  let fixture: ComponentFixture<UpdateJunieComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdateJunieComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateJunieComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
