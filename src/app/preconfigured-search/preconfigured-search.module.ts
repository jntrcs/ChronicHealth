import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { PreconfiguredSearchSymptomComponent } from './preconfigured-search-symptom/preconfigured-search-symptom.component';
import { PreconfiguredSearchGenericComponent } from './preconfigured-search-generic/preconfigured-search-generic.component';
import { ConfigurersModule } from '../configurers/configurers.module';


@NgModule({
  declarations: [PreconfiguredSearchSymptomComponent, PreconfiguredSearchGenericComponent],
  imports: [
    CommonModule,
    IonicModule,
    ConfigurersModule
  ],
  exports: [PreconfiguredSearchSymptomComponent]
})
export class PreconfiguredSearchModule { }
