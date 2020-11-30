import { Component, OnInit } from '@angular/core';
import { AdminService } from '../admin.service';
import { Headquarter } from '../../../shared/interfaces/Headquarter';
import { ExtendedForecast } from '../../../shared/interfaces/ExtendedForecast';
import { CitiesWorld } from '../../../shared/interfaces/CitiesWorld';

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
  sixWeathers: any[];
  totalPages: number;
  shownItems: any[];
  itemsPerSlide: number = 3;
  pageIndex: number = 0;
  constructor(
    private adminService: AdminService) { }

  ngOnInit() {
    this.headquartersList = this.adminService.headquartersList;
    this.extendedForecastList = this.adminService.extendedForecastList;
    this.headquartersPrincipal = this.headquartersList.find(x => x.main_headquarter);
    if (this.headquartersPrincipal.id === this.extendedForecastList.city.id) this.sixWeathers = this.extendedForecastList.list;
    this.validationDate();
    this.validationIconInternal();
    this.initialData();

  }


  validationIconInternal() {
    this.sixWeathers = this.sixWeathers && this.sixWeathers.map(value => ({
      ...value,
      iconFontawesome: this.adminService.validationIcon(value).iconFontawesome,
      tempCelcius: this.adminService.convertKelvinToCelcius(value.main.temp)
    }))
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
  initialData() {
    this.totalPages = Math.round(this.sixWeathers.length / this.itemsPerSlide)
    this.shownItems = this.sixWeathers.slice(this.pageIndex, this.itemsPerSlide);
  }
  nextPage() {
    if (this.pageIndex === 0) {
      this.pageIndex += this.itemsPerSlide;
      this.shownItems = this.sixWeathers.slice(this.pageIndex, this.itemsPerSlide + this.pageIndex);
    }
  }

  previusPage() {
    if (this.pageIndex != 0) {
      this.pageIndex -= this.itemsPerSlide;
      this.shownItems = this.sixWeathers.slice(this.pageIndex, this.pageIndex - this.itemsPerSlide);
    }
  }
}
