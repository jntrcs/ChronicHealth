import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ConfirmationModal  } from './confirmation-modal-component/confirmation-modal.component';
import { IonicModule } from '@ionic/angular';



@NgModule({
  declarations: [ConfirmationModal],
  imports: [
    CommonModule,
    IonicModule
  ],
  exports:  [ConfirmationModal]
})
export class GenericUIModule { }
