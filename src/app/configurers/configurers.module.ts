import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { ConfigureSymptomComponent } from './configure-symptom/configure-symptom.component';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [ConfigureSymptomComponent],
  imports: [
    FormsModule,
    CommonModule,
    IonicModule
  ],
  exports: [ConfigureSymptomComponent]
})
export class ConfigurersModule { }
