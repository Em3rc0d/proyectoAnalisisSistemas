import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreacionReunionesComponent } from './creacion-reuniones.component';

describe('CreacionReunionesComponent', () => {
  let component: CreacionReunionesComponent;
  let fixture: ComponentFixture<CreacionReunionesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CreacionReunionesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CreacionReunionesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
