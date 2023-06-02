import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { ConfigureSymptomComponent } from './configure-symptom/configure-symptom.component';
import { FormsModule } from '@angular/forms';
import { ConfigureIllnessComponent } from './configure-illness/configure-illness.component';
import { GenericUIModule } from '../generic-ui/generic-ui.module';



@NgModule({
  declarations: [ConfigureSymptomComponent, ConfigureIllnessComponent],
  imports: [
    FormsModule,
    CommonModule,
    IonicModule,
    GenericUIModule
  ],
  exports: [ConfigureSymptomComponent, ConfigureIllnessComponent]
})
export class ConfigurersModule { }
