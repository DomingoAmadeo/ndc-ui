import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PolizasCoberturasComponent } from './polizas-coberturas.component';

describe('PolizasCoberturasComponent', () => {
  let component: PolizasCoberturasComponent;
  let fixture: ComponentFixture<PolizasCoberturasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PolizasCoberturasComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PolizasCoberturasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
