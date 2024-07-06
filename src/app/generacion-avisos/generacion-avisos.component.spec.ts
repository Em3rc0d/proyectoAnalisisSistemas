import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GeneracionAvisosComponent } from './generacion-avisos.component';

describe('GeneracionAvisosComponent', () => {
  let component: GeneracionAvisosComponent;
  let fixture: ComponentFixture<GeneracionAvisosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GeneracionAvisosComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GeneracionAvisosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
