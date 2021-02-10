import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { MomentModule } from 'ngx-moment';
import { AppComponent } from './app.component';
import { WeatherListComponent } from './weather-list/weather-list.component';
import { WeatherService } from './weather.service';
import { RouterModule, Routes } from '@angular/router';
import { WeatherDetailComponent } from './weather-detail/weather-detail.component';


const appRoutes: Routes = [
  { path: '',   redirectTo: '/weather-list', pathMatch: 'full' },
  { path: 'weather-list', component: WeatherListComponent },
  { path: 'weather-detail/:id', component: WeatherDetailComponent },
];

@NgModule({
  declarations: [
    AppComponent,
    WeatherListComponent,
    WeatherDetailComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    BrowserModule,
    MomentModule,
    FormsModule,
    RouterModule.forRoot(
      appRoutes
    )
  ],
  providers: [WeatherService],
  bootstrap: [AppComponent]
})
export class AppModule { }
