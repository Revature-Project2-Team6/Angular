import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlanetLevelSelectComponent } from './planet-level-select.component';

describe('PlanetLevelSelectComponent', () => {
  let component: PlanetLevelSelectComponent;
  let fixture: ComponentFixture<PlanetLevelSelectComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PlanetLevelSelectComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PlanetLevelSelectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
