import { Component, OnInit } from '@angular/core';
import { AdminService } from '../admin.service';
import { Headquarter } from '../../../shared/interfaces/Headquarter';
import { ExtendedForecast } from '../../../shared/interfaces/ExtendedForecast';
import { CitiesWorld } from '../../../shared/interfaces/CitiesWorld';
import { ValidationIconClass } from '../../../shared/classes/ValidationIconClass';

@Component({
  selector: 'app-weather-forecast-favorite',
  templateUrl: './weather-forecast-favorite.component.html',
  styleUrls: ['./weather-forecast-favorite.component.sass']
})
export class WeatherForecastFavoriteComponent implements OnInit {
  headquartersList: Headquarter[];
  extendedForecastList: ExtendedForecast;
  citiesWorldList: CitiesWorld[];
  headquartersOthers: Headquarter[];
  constructor(
    private adminService: AdminService,
    private validationIconClass: ValidationIconClass
  ) { }

  ngOnInit() {
    this.headquartersList = this.adminService.headquartersList;
    this.headquartersOthers = this.headquartersList.filter(x => !x.main_headquarter);
    this.validationIconInternal();
  }
  validationIconInternal() {
    if (this.headquartersOthers) {
      for (let i = 0; i < this.headquartersOthers.length; i++) {
        let iconClass = this.validationIconClass.validationIcon(this.headquartersOthers[i]);
        this.headquartersOthers[i].iconFontawesome = iconClass.iconFontawesome;
      }
    }
  }
}
