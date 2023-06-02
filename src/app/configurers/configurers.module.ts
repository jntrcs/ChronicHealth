import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { ConfigureSymptomComponent } from './configure-symptom/configure-symptom.component';
import { FormsModule } from '@angular/forms';
import { ConfigureIllnessComponent } from './configure-illness/configure-illness.component';
import { GenericUIModule } from '../generic-ui/generic-ui.module';
import { ConfigureTreatmentComponent } from './configure-treatment/configure-treatment.component';
import { ConfigureSideEffectComponentComponent } from './configure-side-effect-component/configure-side-effect-component.component';



@NgModule({
  declarations: [ConfigureSymptomComponent, ConfigureIllnessComponent, ConfigureTreatmentComponent, ConfigureSideEffectComponentComponent],
  imports: [
    FormsModule,
    CommonModule,
    IonicModule,
    GenericUIModule
  ],
  exports: [ConfigureSymptomComponent, ConfigureIllnessComponent, ConfigureTreatmentComponent, ConfigureSideEffectComponentComponent]
})
export class ConfigurersModule { }
