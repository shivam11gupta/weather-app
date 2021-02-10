import { TestBed, ComponentFixture } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';

import { WeatherService } from './../weather.service';
import { WeatherDetailComponent } from './weather-detail.component';
import { ActivatedRoute } from '@angular/router';
import { of } from 'rxjs';

describe('WeatherDetail', () => {

  let weatherServiceStub: any;
  let ActivatedRouteStub: any;
  let weatherService: WeatherService;
  let component: WeatherDetailComponent;
  let fixture: ComponentFixture<WeatherDetailComponent>;

  beforeEach(async () => {

    weatherServiceStub = {
      getWeatherList: () => of({}),
      getWeatherDetail: () => of({}),
    };

    ActivatedRouteStub = {
        params: { subscribe: f => f({}) }
    };

    TestBed.configureTestingModule({
      declarations: [ WeatherDetailComponent ],
      providers: [ { provide: WeatherService, useValue: weatherServiceStub },
        { provide: ActivatedRoute, useValue: ActivatedRouteStub } ],
      imports: [RouterTestingModule]
    });

    weatherService = TestBed.inject(WeatherService);
    fixture = TestBed.createComponent(WeatherDetailComponent);
    component = fixture.componentInstance;
    spyOn(weatherService, 'getWeatherDetail').and.returnValue(of({list: [{dt_txt: '', main: {temp: 2.2, sea_level: 1023}}]}));
  });

  it('Should create', () => {
    expect(component).toBeTruthy();
});

  it('should get weather details', () => {
      component.getWeatherDetail('edinburg');
      expect(component.weatherDetail).toHaveSize(0);
  });

});
