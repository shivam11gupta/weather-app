import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { tap } from 'rxjs/operators';
import { Observable } from 'rxjs/internal/Observable';

@Injectable()
export class WeatherService {
    public appId = '3d8b309701a13f65b660fa2c64cdc517';
    constructor(private http: HttpClient) {
    }

    public getWeatherList(city): Observable<any> {
        return this.http.get(`http://api.openweathermap.org/data/2.5/weather?q=${city},uk&units=metric&appid=${this.appId}`).
        pipe(tap((res: any) => {
            return res || [];
        }));
    }

    public getWeatherDetail(city): Observable<any> {
        return this.http.get(`http://api.openweathermap.org/data/2.5/forecast?q=${city},uk&units=metric&appid=${this.appId}`).
        pipe(tap((res: any) => {
            return res || [];
        }));
    }
}
