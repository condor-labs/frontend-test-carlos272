import { Component, OnInit } from '@angular/core';
import { AdminService } from '../admin.service';
import { Headquarter } from '../../../shared/interfaces/Headquarter';
import { ExtendedForecast } from '../../../shared/interfaces/ExtendedForecast';
import { CitiesWorld } from '../../../shared/interfaces/CitiesWorld';
import { ValidationIconClass } from '../../../shared/classes/ValidationIconClass';

@Component({
  selector: 'app-weather-forecast-suggest',
  templateUrl: './weather-forecast-suggest.component.html',
  styleUrls: ['./weather-forecast-suggest.component.sass']
})
export class WeatherForecastSuggestComponent implements OnInit {
  headquartersList: Headquarter[];
  extendedForecastList: ExtendedForecast;
  citiesWorldList: CitiesWorld[];
  headquartersPrincipal: Headquarter;
  sixWeathers: any;
  bestDayReturn: any;

  constructor(
    private adminService: AdminService,
    private validationIconClass: ValidationIconClass
  ) { }

  ngOnInit() {
    this.headquartersList = this.adminService.headquartersList;
    this.extendedForecastList = this.adminService.extendedForecastList;
    this.citiesWorldList = this.adminService.citiesWorldList;
    this.headquartersPrincipal = this.headquartersList.find(x => x.main_headquarter);
    if (this.headquartersPrincipal.id === this.extendedForecastList.city.id) this.sixWeathers = this.extendedForecastList.list;
    this.validationDate();
    this.validationIconInternal();
    this.bestDayReturn = this.bestDay();
  }
  validationIconInternal() {
    this.sixWeathers = this.sixWeathers && this.sixWeathers.map(value => ({
      ...value,
      iconFontawesome: this.validationIconClass.validationIcon(value).iconFontawesome
    }))
  }
  bestDay() {
    let bestDay = {};
    if (this.sixWeathers) {
      let bestWeather = this.sixWeathers.filter(x => ((parseInt((x.main.temp - 273.15).toFixed(0))) >= 25) &&
        ((parseInt((x.main.temp - 273.15).toFixed(0))) <= 28)
      );
      if (bestWeather) {
        let minWind = bestWeather[0].main.humidity;
        bestWeather.forEach((l, index, element) => {
          if (element[index]['main'].humidity < minWind) {
            minWind = element[index]['main'].humidity;
          }
        });
        if (minWind) {
          bestDay = bestWeather.find(x => x.main.humidity == minWind);
        }
      }
      return bestDay;
    }
  }

  validationDate(): void {
    if (this.sixWeathers) {
      let days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
      for (let i = 0; i < this.sixWeathers.length; i++) {
        let day = new Date(this.sixWeathers[i].date);
        let dayName = days[day.getDay()];
        this.sixWeathers[i].day = dayName;
      }
    }

  }

}
