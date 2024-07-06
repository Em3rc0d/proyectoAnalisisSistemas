import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RecepcionOrdenesComponent } from './recepcion-ordenes.component';

describe('RecepcionOrdenesComponent', () => {
  let component: RecepcionOrdenesComponent;
  let fixture: ComponentFixture<RecepcionOrdenesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RecepcionOrdenesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RecepcionOrdenesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
