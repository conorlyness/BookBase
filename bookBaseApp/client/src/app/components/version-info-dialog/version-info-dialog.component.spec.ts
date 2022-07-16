import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VersionInfoDialogComponent } from './version-info-dialog.component';

describe('VersionInfoDialogComponent', () => {
  let component: VersionInfoDialogComponent;
  let fixture: ComponentFixture<VersionInfoDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VersionInfoDialogComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VersionInfoDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
