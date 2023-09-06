import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CulturaGastronomicaComponent } from './cultura-gastronomica.component';

describe('CulturaGastronomicaComponent', () => {
  let component: CulturaGastronomicaComponent;
  let fixture: ComponentFixture<CulturaGastronomicaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CulturaGastronomicaComponent]
    });
    fixture = TestBed.createComponent(CulturaGastronomicaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
