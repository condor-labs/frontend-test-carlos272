import { Component, OnInit } from '@angular/core';
import { AdminService } from '../admin.service';
import { Headquarter } from '../../../shared/interfaces/Headquarter';
import { ExtendedForecast } from '../../../shared/interfaces/ExtendedForecast';
@Component({
  selector: 'app-weather-forecast-suggest',
  templateUrl: './weather-forecast-suggest.component.html',
  styleUrls: ['./weather-forecast-suggest.component.sass']
})
export class WeatherForecastSuggestComponent implements OnInit {
  headquartersList: Headquarter[];
  extendedForecastList: ExtendedForecast;
  headquartersPrincipal: Headquarter;
  sixWeathers: any;
  bestDayReturn: any;

  constructor(
    private adminService: AdminService) { }

  ngOnInit() {
    this.bestDayReturn = [];
    this.headquartersList = this.adminService.headquartersList;
    this.extendedForecastList = this.adminService.extendedForecastList;
    this.headquartersPrincipal = this.headquartersList.find(x => x.main_headquarter);
    if (this.headquartersPrincipal.id === this.extendedForecastList.city.id) this.sixWeathers = this.extendedForecastList.list;
    this.validationDate();
    this.validationIconInternal();
    this.bestDayReturn = this.bestDay();
    this.bestDayReturn.main.temp = this.adminService.convertKelvinToCelcius(this.bestDayReturn.main.temp);
  }
  validationIconInternal() {
    this.sixWeathers = this.sixWeathers && this.sixWeathers.map(value => ({
      ...value,
      iconFontawesome: this.adminService.validationIcon(value).iconFontawesome
    }))
  }
  bestDay() {
    let bestDay = {};
    let bestWeather = this.adminService.calculationRank(this.sixWeathers, 25, 28);
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
  validationDate(): void {
    if (this.sixWeathers) {
      let days = this.adminService.dayList();
      for (let i = 0; i < this.sixWeathers.length; i++) {
        let day = new Date(this.sixWeathers[i].date);
        let dayName = days[day.getDay()];
        this.sixWeathers[i].day = dayName;
      }
    }
  }
}
