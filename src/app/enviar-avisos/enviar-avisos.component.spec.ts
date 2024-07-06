import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EnviarAvisosComponent } from './enviar-avisos.component';

describe('EnviarAvisosComponent', () => {
  let component: EnviarAvisosComponent;
  let fixture: ComponentFixture<EnviarAvisosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EnviarAvisosComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EnviarAvisosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
