import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsultasFiltroComponent } from './consultas-filtro.component';

describe('ConsultasFiltroComponent', () => {
  let component: ConsultasFiltroComponent;
  let fixture: ComponentFixture<ConsultasFiltroComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConsultasFiltroComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ConsultasFiltroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
