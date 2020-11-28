import { Component, OnInit } from '@angular/core';
import { AdminService } from '../admin.service';
import { Headquarter } from '../../../shared/interfaces/Headquarter';
import { ExtendedForecast } from '../../../shared/interfaces/ExtendedForecast';
import { CitiesWorld } from '../../../shared/interfaces/CitiesWorld';
@Component({
  selector: 'app-weather-forecast-principal',
  templateUrl: './weather-forecast-principal.component.html',
  styleUrls: ['./weather-forecast-principal.component.sass']
})
export class WeatherForecastPrincipalComponent implements OnInit  {
  headquartersList: Headquarter[];
  extendedForecastList: ExtendedForecast[];
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
    console.log("headquartersPrincipal", this.headquartersPrincipal);
    /* console.log("headquartersList", this.headquartersList);
     console.log("extendedForecastList", this.extendedForecastList);
     console.log("citiesWorldList", this.citiesWorldList);*/
  }

}
