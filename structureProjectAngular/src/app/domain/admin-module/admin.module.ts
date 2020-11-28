import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';

/** Import PrimeNG and Shared Module */
import { SharedModule } from './../../shared/shared.module';
import { AdminModuleComponent } from '../admin-module/admin-module.component';
import { AdminRoutingModule } from '../admin-module/admin-routing.module';
import { WeatherForecastPrincipalComponent } from './weather-forecast-principal/weather-forecast-principal.component';
import { WeatherForecastSliderComponent } from './weather-forecast-slider/weather-forecast-slider.component';
import { WeatherForecastFavoriteComponent } from './weather-forecast-favorite/weather-forecast-favorite.component';
import { WeatherForecastSuggestComponent } from './weather-forecast-suggest/weather-forecast-suggest.component';
import { CitiesWorldComponent } from './cities-world/cities-world.component';
import { TemperatureConverterPipe } from '../../TemperatureConverterPipe';

@NgModule({
  declarations: [AdminModuleComponent, WeatherForecastPrincipalComponent, WeatherForecastSliderComponent, WeatherForecastFavoriteComponent, WeatherForecastSuggestComponent, CitiesWorldComponent,
    TemperatureConverterPipe],
  imports: [
    CommonModule,
    FormsModule,
    SharedModule,
    AdminRoutingModule
  ],
  entryComponents: [AdminModuleComponent],
  exports: [RouterModule]

})
export class AdminModule { }
