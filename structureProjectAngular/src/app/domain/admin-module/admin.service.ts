import { Injectable } from '@angular/core';
import { HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { HttpService } from '../../shared/services/http.service';
import { ConfigService } from '../../shared/services/config.service';
import { Headquarter } from '../../shared/interfaces/Headquarter';
import { ExtendedForecast } from '../../shared/interfaces/ExtendedForecast';
import { CitiesWorld } from '../../shared/interfaces/CitiesWorld';
import { Weather } from '../../shared/enums/Weather.enum';
import { ClassIcon } from '../../shared/enums/Icons.enum';
import { EnviromentResource } from '../../shared/enums/EnviromentResource.enum';
@Injectable({
  providedIn: 'root'
})
export class AdminService {
  headquartersList: Headquarter[];
  extendedForecastList: ExtendedForecast;
  citiesWorldList: CitiesWorld[];

  headquarters = EnviromentResource.Headquarters;
  extendedForecast = EnviromentResource.ExtendedForecast;
  citiesWorld = EnviromentResource.CitiesWorld;
  constructor(
    private httpService: HttpService,
    private configService: ConfigService
  ) {
  }
  /**
  * @description this method keeps headquarters in the service
  * @author Carlos Almanza
  */
  public headquartersData(headquarters): void {
    this.headquartersList = headquarters;
  }

  /**
* @description this method keeps extendedForecast in the service
* @author Carlos Almanza
*/
  public extendedForecastsData(extendedForecast): void {
    this.extendedForecastList = extendedForecast;
  }
  /**
  * @description this method keeps citiesWorld in the service
  * @author Carlos Almanza
  */
  public citiesWorldData(citiesWorld): void {
    this.citiesWorldList = citiesWorld;
  }

  headquartersService(): Observable<Headquarter> {
    let response$: Observable<Headquarter>;
    response$ = this.httpService
      .Get(
        `${this.configService.getUrlAdmin()}${this.headquarters}`)
      .pipe(
        map((response: HttpResponse<any>) => {
          return response.body.places
        }),
      );
    return response$;
  }


  extendedForecastService(): Observable<ExtendedForecast> {
    let response$: Observable<ExtendedForecast>;
    response$ = this.httpService
      .Get(
        `${this.configService.getUrlAdmin()}${this.extendedForecast}`)
      .pipe(
        map((response: HttpResponse<ExtendedForecast>) => {
          return response.body
        }),
      );

    return response$;
  }

  citiesWorldService(): Observable<CitiesWorld> {
    let response$: Observable<CitiesWorld>;
    response$ = this.httpService
      .Get(
        `${this.configService.getUrlAdmin()}${this.citiesWorld}`)
      .pipe(
        map((response: HttpResponse<any>) => {
          return response.body.result
        }),
      );
    return response$;
  }

  /**
  * @description this method convert from kelvin to Celcius
  * @author Carlos Almanza
  */
  convertKelvinToCelcius(value): number {
    let valueCelcius = parseInt((value - 273.15).toFixed(0));
    return valueCelcius;
  }

  /**
   * @description this method return object Incon's class
   * @author Carlos Almanza
   */
  validationIcon(headquartersPrincipal): any {
    switch (headquartersPrincipal.weather[0].icon) {
      case Weather.cloud:
        headquartersPrincipal.iconFontawesome = ClassIcon.cloudIcon;
        break;
      case Weather.snow:
        headquartersPrincipal.iconFontawesome = ClassIcon.snowIcon;
        break;
      case Weather.rain:
        headquartersPrincipal.iconFontawesome = ClassIcon.rainIcon;
        break;
      case Weather.haze:
        headquartersPrincipal.iconFontawesome = ClassIcon.hazeIcon;

        break;
      case Weather.hot:
        headquartersPrincipal.iconFontawesome = ClassIcon.hotIcon;

        break;
      case Weather.daySunny:
        headquartersPrincipal.iconFontawesome = ClassIcon.daySunnyIcon;

        break;
      case Weather.fog:
        headquartersPrincipal.iconFontawesome = ClassIcon.fogIcon;

        break;
      case Weather.cloudy:
        headquartersPrincipal.iconFontawesome = ClassIcon.cloudyIcon;

        break;
      case Weather.sleet:
        headquartersPrincipal.iconFontawesome = ClassIcon.sleetIcon;

        break;
      case Weather.hail:
        headquartersPrincipal.iconFontawesome = ClassIcon.hailIcon;

        break;
      case Weather.thunderstorm:
        headquartersPrincipal.iconFontawesome = ClassIcon.thunderstormIcon;

        break;
      case Weather.windy:
        headquartersPrincipal.iconFontawesome = ClassIcon.windyIcon;
        break;
      default:
        break;
    }
    return headquartersPrincipal;
  }
}
