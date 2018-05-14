import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MovimientoDialogComponent } from './movimiento-dialog.component';

describe('MovimientoDialogComponent', () => {
  let component: MovimientoDialogComponent;
  let fixture: ComponentFixture<MovimientoDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MovimientoDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MovimientoDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
