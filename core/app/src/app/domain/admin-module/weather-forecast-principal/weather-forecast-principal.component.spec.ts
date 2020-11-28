import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WeatherForecastPrincipalComponent } from './weather-forecast-principal.component';

describe('CitiesWorldComponent', () => {
  let component: WeatherForecastPrincipalComponent;
  let fixture: ComponentFixture<WeatherForecastPrincipalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WeatherForecastPrincipalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WeatherForecastPrincipalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

});