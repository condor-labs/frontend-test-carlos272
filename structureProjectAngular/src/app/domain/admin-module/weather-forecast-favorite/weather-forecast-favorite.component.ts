import { Component, OnInit } from '@angular/core';
import { AdminService } from '../admin.service';
import { Headquarter } from '../../../shared/interfaces/Headquarter';
@Component({
  selector: 'app-weather-forecast-favorite',
  templateUrl: './weather-forecast-favorite.component.html',
  styleUrls: ['./weather-forecast-favorite.component.sass']
})
export class WeatherForecastFavoriteComponent implements OnInit {
  headquartersList: Headquarter[];

  headquartersOthers: Headquarter[];
  constructor(
    private adminService: AdminService
  ) { }

  ngOnInit() {
    this.headquartersList = this.adminService.headquartersList;
    this.headquartersOthers = this.headquartersList.filter(x => !x.main_headquarter);
    this.validationIconInternal();
  }

  validationIconInternal() {
    this.headquartersOthers = this.headquartersOthers && this.headquartersOthers.map(value => ({
      ...value,
      iconFontawesome: this.adminService.validationIcon(value).iconFontawesome,
      tempCelcius: this.adminService.convertKelvinToCelcius(value.main.temp)
    }))
  }
}
