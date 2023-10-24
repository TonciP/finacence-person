import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GestionMovimientoComponent } from './gestion-movimiento.component';

describe('GestionMovimientoComponent', () => {
  let component: GestionMovimientoComponent;
  let fixture: ComponentFixture<GestionMovimientoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GestionMovimientoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GestionMovimientoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
