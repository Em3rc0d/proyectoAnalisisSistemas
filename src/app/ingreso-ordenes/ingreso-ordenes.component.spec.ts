import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IngresoOrdenesComponent } from './ingreso-ordenes.component';

describe('IngresoOrdenesComponent', () => {
  let component: IngresoOrdenesComponent;
  let fixture: ComponentFixture<IngresoOrdenesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [IngresoOrdenesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(IngresoOrdenesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
