import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddJunieComponent } from './add-junie.component';

describe('AddJunieComponent', () => {
  let component: AddJunieComponent;
  let fixture: ComponentFixture<AddJunieComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddJunieComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddJunieComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
