import { Component, OnInit } from '@angular/core';
import { AdminService } from '../admin.service';
import { Headquarter } from '../../../shared/interfaces/Headquarter';
import { CitiesWorld } from '../../../shared/interfaces/CitiesWorld';
@Component({
  selector: 'app-weather-forecast-principal',
  templateUrl: './weather-forecast-principal.component.html',
  styleUrls: ['./weather-forecast-principal.component.sass']
})
export class WeatherForecastPrincipalComponent implements OnInit {
  headquartersList: Headquarter[];
  headquartersPrincipal: Headquarter;
  constructor(
    private adminService: AdminService
  ) { }

  ngOnInit() {
    this.headquartersList = this.adminService.headquartersList;
    this.headquartersPrincipal = this.headquartersList.find(x => x.main_headquarter);
    this.adminService.validationIcon(this.headquartersPrincipal);
    this.headquartersPrincipal.main.temp = this.adminService.convertKelvinToCelcius(this.headquartersPrincipal.main.temp);
  }

}
