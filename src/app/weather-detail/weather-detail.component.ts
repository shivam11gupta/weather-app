import { Component, OnInit } from '@angular/core';
import { WeatherService } from '../weather.service';
import { ActivatedRoute } from '@angular/router';
import { UseExistingWebDriver } from 'protractor/built/driverProviders';

@Component({
  selector: 'app-weather-detail',
  templateUrl: './weather-detail.component.html',
})
export class WeatherDetailComponent implements OnInit {
  public weatherDetail = [];
  public selectedCity;
  constructor(public weatherService: WeatherService, public route: ActivatedRoute) {

  }

  public ngOnInit(): void {
    this.route.params.subscribe((params: any) => {
      this.selectedCity = params.id;
      this.getWeatherDetail(params.id);
    });
  }

  // for get 5 day weather forecaset this api is Used
  // https://openweathermap.org/forecast5

  public getWeatherDetail(id): void {
    this.weatherService.getWeatherDetail(id).subscribe((result) => {
      if (result && result.list) {
        result.list.forEach((data) => {
          if (new Date(data.dt_txt).getHours() === 9) {
            this.weatherDetail.push(data);
          }
        });
      }
    });
  }
}
