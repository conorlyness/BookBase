import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClearMatSelectComponent } from './clear-mat-select.component';

describe('ClearMatSelectComponent', () => {
  let component: ClearMatSelectComponent;
  let fixture: ComponentFixture<ClearMatSelectComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ClearMatSelectComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ClearMatSelectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
