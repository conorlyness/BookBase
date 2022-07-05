import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RemoveFavDialogComponent } from './remove-fav-dialog.component';

describe('RemoveFavDialogComponent', () => {
  let component: RemoveFavDialogComponent;
  let fixture: ComponentFixture<RemoveFavDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RemoveFavDialogComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RemoveFavDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
