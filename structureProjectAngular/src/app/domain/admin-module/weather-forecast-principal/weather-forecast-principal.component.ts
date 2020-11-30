import { Component, OnInit } from '@angular/core';
import { AdminService } from '../admin.service';
import { Headquarter } from '../../../shared/interfaces/Headquarter';
import { ExtendedForecast } from '../../../shared/interfaces/ExtendedForecast';
import { CitiesWorld } from '../../../shared/interfaces/CitiesWorld';
import { Weather } from '../../../shared/enums/Weather.enum';
import { ClassIcon } from '../../../shared/enums/Icons.enum';
@Component({
  selector: 'app-weather-forecast-principal',
  templateUrl: './weather-forecast-principal.component.html',
  styleUrls: ['./weather-forecast-principal.component.sass']
})
export class WeatherForecastPrincipalComponent implements OnInit {
  myVar="Hola Mundo"
  headquartersList: Headquarter[];
  extendedForecastList: ExtendedForecast;
  citiesWorldList: CitiesWorld[];
  headquartersPrincipal: Headquarter;
  constructor(
    private adminService: AdminService
  ) { }

  ngOnInit() {
    this.headquartersList = this.adminService.headquartersList;
    this.extendedForecastList = this.adminService.extendedForecastList;
    this.citiesWorldList = this.adminService.citiesWorldList;

    this.headquartersPrincipal = this.headquartersList.find(x => x.main_headquarter);
    this.adminService.validationIcon(this.headquartersPrincipal);
    this.headquartersPrincipal.main.temp = this.adminService.convertKelvinToCelcius(this.headquartersPrincipal.main.temp);
  }

}
