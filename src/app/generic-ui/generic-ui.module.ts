import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ConfirmationModal  } from './confirmation-modal-component/confirmation-modal.component';
import { IonicModule } from '@ionic/angular';
import { TypeaheadMultiSelectComponent } from './typeahead-multi-select/typeahead-multi-select.component';



@NgModule({
  declarations: [ConfirmationModal, TypeaheadMultiSelectComponent],
  imports: [
    CommonModule,
    IonicModule
  ],
  exports:  [ConfirmationModal, TypeaheadMultiSelectComponent]
})
export class GenericUIModule { }
