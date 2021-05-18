import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailJunieComponent } from './detail-junie.component';

describe('DetailJunieComponent', () => {
  let component: DetailJunieComponent;
  let fixture: ComponentFixture<DetailJunieComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetailJunieComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailJunieComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
