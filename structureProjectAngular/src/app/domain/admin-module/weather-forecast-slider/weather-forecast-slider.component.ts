import { Component, OnInit } from '@angular/core';
import { AdminService } from '../admin.service';
import { Headquarter } from '../../../shared/interfaces/Headquarter';
import { ExtendedForecast } from '../../../shared/interfaces/ExtendedForecast';
import { CitiesWorld } from '../../../shared/interfaces/CitiesWorld';
import { ValidationIconClass } from '../../../shared/classes/ValidationIconClass';

@Component({
  selector: 'app-weather-forecast-slider',
  templateUrl: './weather-forecast-slider.component.html',
  styleUrls: ['./weather-forecast-slider.component.sass']
})
export class WeatherForecastSliderComponent implements OnInit {
  headquartersList: Headquarter[];
  extendedForecastList: ExtendedForecast;
  citiesWorldList: CitiesWorld[];
  headquartersPrincipal: Headquarter;
  sixWeathers: any;

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

    /*console.log("headquartersList", this.headquartersList);
    console.log("extendedForecastList", this.extendedForecastList);
    console.log("citiesWorldList", this.citiesWorldList);*/
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
  validationIconInternal() {
    this.sixWeathers = this.sixWeathers && this.sixWeathers.map(value => ({
      ...value,
      iconFontawesome: this.validationIconClass.validationIcon(value).iconFontawesome
    }))
  }
}
