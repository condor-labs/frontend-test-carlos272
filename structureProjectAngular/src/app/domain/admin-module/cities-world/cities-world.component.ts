import { Component, OnInit } from '@angular/core';
import { AdminService } from '../admin.service';
import { Headquarter } from '../../../shared/interfaces/Headquarter';
import { ExtendedForecast } from '../../../shared/interfaces/ExtendedForecast';
import { CitiesWorld } from '../../../shared/interfaces/CitiesWorld';

@Component({
  selector: 'app-cities-world',
  templateUrl: './cities-world.component.html',
  styleUrls: ['./cities-world.component.sass']
})
export class CitiesWorldComponent implements OnInit {
  headquartersList: Headquarter[];
  extendedForecastList: ExtendedForecast;
  citiesWorldList: CitiesWorld[];
  headquartersPrincipal: Headquarter;
  recommendedCities: CitiesWorld[];
  constructor(
    private adminService: AdminService
  ) {
  }
  ngOnInit() {
    this.citiesWorldList = this.adminService.citiesWorldList;
    this.recommendedCities = this.bestWeatherCity();
  }
  bestWeatherCity() {
    let recommendedCities = [];
    if (this.citiesWorldList) {
      recommendedCities = this.adminService.calculationRank(this.citiesWorldList, 24, 30);
      return recommendedCities;
    }
  }
}
