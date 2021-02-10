import { Component, OnInit } from '@angular/core';
import { WeatherService } from '../weather.service';
import { Router } from '@angular/router';
import * as moment from 'moment';


@Component({
  selector: 'app-weather-list',
  templateUrl: './weather-list.component.html',
})
export class WeatherListComponent implements OnInit {
  public weatherList = [];
  public cityList = ['Cambridge', 'London', 'Edinburgh', 'Oxford', 'Glasgow'];
  constructor(public weatherService: WeatherService, public router: Router) {

  }

  public ngOnInit(): void {
    this.getWeatherList();
  }

  public getWeatherList(): void {
    this.cityList.forEach((city, index) => {
      this.weatherService.getWeatherList(city).subscribe((result) => {
        if (result) {
          result.sys.sunrise = moment.utc(moment.unix(result.sys.sunrise)).format('hh:mm A');
          result.sys.sunset = moment.utc(moment.unix(result.sys.sunset)).format('hh:mm A');
          this.weatherList.push(result);
        }
      });
    });
  }

  public getWeatherDetail(name): void {
    this.router.navigate(['/weather-detail', name]);
  }
}
