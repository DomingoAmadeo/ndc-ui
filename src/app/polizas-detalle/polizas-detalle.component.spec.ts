import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PolizasDetalleComponent } from './polizas-detalle.component';

describe('PolizasDetalleComponent', () => {
  let component: PolizasDetalleComponent;
  let fixture: ComponentFixture<PolizasDetalleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PolizasDetalleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PolizasDetalleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
