import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MostPopularMonthAndYearComponent } from './most-popular-month-and-year.component';

describe('MostPopularMonthAndYearComponent', () => {
  let component: MostPopularMonthAndYearComponent;
  let fixture: ComponentFixture<MostPopularMonthAndYearComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MostPopularMonthAndYearComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MostPopularMonthAndYearComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
