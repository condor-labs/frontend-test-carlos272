import { Injectable } from '@angular/core';
import { HttpErrorResponse, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { catchError, tap, map } from 'rxjs/operators';
import { HttpService } from '../../shared/services/http.service';
import { ConfigService } from '../../shared/services/config.service';
import { Headquarter } from '../../shared/interfaces/Headquarter';
import { ExtendedForecast } from '../../shared/interfaces/ExtendedForecast';
import { CitiesWorld } from '../../shared/interfaces/CitiesWorld';
@Injectable({
  providedIn: 'root'
})
export class AdminService {
  headquartersList: Headquarter[];
  extendedForecastList: ExtendedForecast[];
  citiesWorldList: CitiesWorld[];
  
  headquarters = '818d0158-727b-461e-9f76-06734ed7e582';
  extendedForecast = '73c29128-d158-40db-aeae-ea78a0d762b7';
  citiesWorld = 'f8926877-849a-416f-8226-9fd9d9fc5e07';
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
}