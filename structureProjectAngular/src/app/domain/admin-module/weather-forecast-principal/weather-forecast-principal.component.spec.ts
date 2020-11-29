import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WeatherForecastPrincipalComponent } from './weather-forecast-principal.component';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing'


describe('WeatherForecastPrincipalComponent', () => {
  let component: WeatherForecastPrincipalComponent;
  let fixture: ComponentFixture<WeatherForecastPrincipalComponent>;

  let WeatherForecastPrincipalComponentw;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        WeatherForecastPrincipalComponent
      ],
      providers: [
        WeatherForecastPrincipalComponent
      ],
      imports: [
        HttpClientTestingModule
      ]
    })
      .compileComponents();
    console.log('beforeEach');
    WeatherForecastPrincipalComponentw = TestBed.get(WeatherForecastPrincipalComponent)

  }));
  afterEach(() => {
    console.log('afterEach')
  })

  beforeEach(() => {
    fixture = TestBed.createComponent(WeatherForecastPrincipalComponentw);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });
  it('El valor de myVar debe ser Hola Mundo', () => {
    const valor = WeatherForecastPrincipalComponentw.myVar
    expect(valor).toEqual('Hola Mundo')
  })
  
});


