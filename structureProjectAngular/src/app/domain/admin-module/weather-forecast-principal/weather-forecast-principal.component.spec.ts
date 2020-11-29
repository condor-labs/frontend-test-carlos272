import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WeatherForecastPrincipalComponent } from './weather-forecast-principal.component';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing'
import { AdminModuleComponent } from '../admin-module.component';

import { WeatherForecastSliderComponent } from '../weather-forecast-slider/weather-forecast-slider.component';
import { WeatherForecastFavoriteComponent } from '../weather-forecast-favorite/weather-forecast-favorite.component';
import { WeatherForecastSuggestComponent } from '../weather-forecast-suggest/weather-forecast-suggest.component';
import { CitiesWorldComponent } from '../cities-world/cities-world.component';
import { By } from '@Angular/platform-browser';

describe('WeatherForecastPrincipalComponent', () => {
  let component: WeatherForecastPrincipalComponent;
  let fixture: ComponentFixture<WeatherForecastPrincipalComponent>;

  let weatherForecastPrincipalComponent;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        WeatherForecastPrincipalComponent,
        AdminModuleComponent,
        WeatherForecastSliderComponent,
        WeatherForecastFavoriteComponent,
        WeatherForecastSuggestComponent,
        CitiesWorldComponent
      ],
      providers: [
        WeatherForecastPrincipalComponent,
        AdminModuleComponent,
        WeatherForecastSliderComponent,
        WeatherForecastFavoriteComponent,
        WeatherForecastSuggestComponent,
        CitiesWorldComponent
      ],
      imports: [
        HttpClientTestingModule
      ]
    })
      .compileComponents();
    console.log('beforeEach');
    weatherForecastPrincipalComponent = TestBed.get(WeatherForecastPrincipalComponent)

  }));
  beforeEach(() => {
    fixture = TestBed.createComponent(WeatherForecastPrincipalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });
  it('hola', () => {
    const valor = weatherForecastPrincipalComponent.myVar
    expect(valor).toEqual('Hola Mundo')
  })
  it('debe tener la clase addItem', () => {
    //    Add Item Debug Ele comes out as not null.
    const addItemDebugElement = fixture.debugElement.query(By.css('.widget-header'));
    console.log('addItemDebugElement', addItemDebugElement);
    expect(addItemDebugElement).toBeTruthy();
  })

  it("should be in HTML page", function () {
    const de = fixture.debugElement.query(By.css('#Listado'));
  });
});


