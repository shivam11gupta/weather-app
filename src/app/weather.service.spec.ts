import { TestBed } from '@angular/core/testing';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { of } from 'rxjs';
import { WeatherService } from './weather.service';

describe('Weather service', () => {

    let service: WeatherService;
    let httpClient: HttpClient;

    beforeEach(() => {
        TestBed.configureTestingModule({
            providers: [WeatherService],
            imports: [HttpClientModule]
        });

        service = TestBed.get(WeatherService);
        httpClient = TestBed.get(HttpClient);
    });

    it('Should create', () => {
        expect(service).toBeTruthy();
    });

    it('should be able to get weather list', () => {
        const city = 'london';
        const appId = '3d8b309701a13f65b660fa2c64cdc517';
        spyOn(httpClient, 'get').and.returnValue(of({name: 'london', temp: 2.1}));

        service.getWeatherList('london').subscribe(res => {
            expect(res.temp).toEqual(2.1);
        });

        expect(httpClient.get).toHaveBeenCalledWith(`http://api.openweathermap.org/data/2.5/weather?q=${city},uk&units=metric&appid=${appId}`);
    });

    it('should be able to get weather details', () => {
        const city = 'london';
        const appId = '3d8b309701a13f65b660fa2c64cdc517';
        spyOn(httpClient, 'get').and.returnValue(of({name: 'london', temp: 2.1}));

        service.getWeatherDetail('london').subscribe(res => {
            expect(res.temp).toEqual(2.1);
        });

        expect(httpClient.get).toHaveBeenCalledWith(`http://api.openweathermap.org/data/2.5/forecast?q=${city},uk&units=metric&appid=${appId}`);
    });
});
