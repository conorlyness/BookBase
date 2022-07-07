import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CurrentlyReadingDialogComponent } from './currently-reading-dialog.component';

describe('CurrentlyReadingDialogComponent', () => {
  let component: CurrentlyReadingDialogComponent;
  let fixture: ComponentFixture<CurrentlyReadingDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CurrentlyReadingDialogComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CurrentlyReadingDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
