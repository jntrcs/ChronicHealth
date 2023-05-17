import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PresentMeasurementComponent, CountMeasurementComponent, SeverityMeasurementComponent } from './Components/MeasurementComponents';


@NgModule({
  declarations: [AppComponent,    PresentMeasurementComponent,
    CountMeasurementComponent,
    SeverityMeasurementComponent],
  imports: [BrowserModule, IonicModule.forRoot(), AppRoutingModule],
  providers: [{ provide: RouteReuseStrategy, useClass: IonicRouteStrategy }
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
