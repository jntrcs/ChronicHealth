import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { PreconfiguredSearchSymptomComponent } from './preconfigured-search-symptom/preconfigured-search-symptom.component';
import { PreconfiguredSearchGenericComponent } from './preconfigured-search-generic/preconfigured-search-generic.component';
import { ConfigurersModule } from '../configurers/configurers.module';
import { PreconfiguredSearchIllnessComponent } from './preconfigured-search-illness/preconfigured-search-illness.component';
import { PreconfiguredSearchTreatmentComponent } from './preconfigured-search-treatment/preconfigured-search-treatment.component';


@NgModule({
  declarations: [PreconfiguredSearchSymptomComponent, PreconfiguredSearchGenericComponent,
  PreconfiguredSearchIllnessComponent, PreconfiguredSearchTreatmentComponent,
PreconfiguredSearchTreatmentComponent],
  imports: [
    CommonModule,
    IonicModule,
    ConfigurersModule
  ],
  exports: [PreconfiguredSearchSymptomComponent, PreconfiguredSearchGenericComponent,
    PreconfiguredSearchIllnessComponent, PreconfiguredSearchTreatmentComponent,
  PreconfiguredSearchTreatmentComponent]
})
export class PreconfiguredSearchModule { }
