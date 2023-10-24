import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CategorizacionMovimientoComponent } from './categorizacion-movimiento.component';

describe('CategorizacionMovimientoComponent', () => {
  let component: CategorizacionMovimientoComponent;
  let fixture: ComponentFixture<CategorizacionMovimientoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CategorizacionMovimientoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CategorizacionMovimientoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
