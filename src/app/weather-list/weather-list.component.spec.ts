import { TestBed, ComponentFixture } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';

import { WeatherService } from './../weather.service';
import { WeatherListComponent } from './weather-list.component';
import { Router } from '@angular/router';
import { of } from 'rxjs';

describe('WeatherList', () => {

  let weatherServiceStub: any;
  let weatherService: WeatherService;
  let component: WeatherListComponent;
  let fixture: ComponentFixture<WeatherListComponent>;
  let h2: HTMLElement;

  beforeEach(async () => {

    weatherServiceStub = {
      getWeatherList: () => of({}),
      getWeatherDetail: () => of({}),
    };

    TestBed.configureTestingModule({
      declarations: [ WeatherListComponent ],
      providers: [ { provide: WeatherService, useValue: weatherServiceStub } ],
      imports: [RouterTestingModule]
    });

    weatherService = TestBed.inject(WeatherService);
    fixture = TestBed.createComponent(WeatherListComponent);
    component = fixture.componentInstance;
    h2 = fixture.nativeElement.querySelector('h2');
    component.cityList = ['Cambridge', 'London', 'Edinburgh', 'Oxford', 'Glasgow'];
    spyOn(weatherService, 'getWeatherList').and.returnValue(of({name: 'edinburg',
    sys: {sunrise: 1612976710, sunset: 1612976710}, main: {temp: 2.1}}));
  });

  it('Should create', () => {
    expect(component).toBeTruthy();
});

  it('should display Weather Information', () => {
    fixture.detectChanges();
    expect(h2.textContent).toContain('Weather Information');
  });

  it('should get weather details', () => {
    const router = TestBed.get(Router);
    spyOn(router, 'navigate');
    component.getWeatherDetail('london');
    expect(router.navigate).toHaveBeenCalledWith(['/weather-detail', 'london']);
  });

});
