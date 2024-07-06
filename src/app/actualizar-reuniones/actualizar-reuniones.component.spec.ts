import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ActualizarReunionesComponent } from './actualizar-reuniones.component';

describe('ActualizarReunionesComponent', () => {
  let component: ActualizarReunionesComponent;
  let fixture: ComponentFixture<ActualizarReunionesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ActualizarReunionesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ActualizarReunionesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
