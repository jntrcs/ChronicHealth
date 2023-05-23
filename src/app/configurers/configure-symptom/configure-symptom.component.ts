import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { Router } from '@angular/router';
import { Symptom } from 'src/app/models/Symptom';
import { UserService } from 'src/app/user.service';

@Component({
  selector: 'app-configure-symptom',
  templateUrl: './configure-symptom.component.html',
  styleUrls: ['./configure-symptom.component.scss'],
})
export class ConfigureSymptomComponent  implements OnInit {

  @Input() symptomName!: string;  
  @Input() symptomMeasurement!: string;

  @Input() mode!: 'add' | 'edit';
  @Output() save: EventEmitter<string> = new EventEmitter<string>();
  @Output() cancel: EventEmitter<void> = new EventEmitter<void>();

  constructor(private userService: UserService, private router: Router){

  }

  saveSymptom() {

    const isNameDuplicate = this.userService.get_symptoms().some(symptom => symptom.name.toLowerCase() === this.symptomName.toLowerCase());
    if (isNameDuplicate) {
      this.setOpen(true);
      return; // Prevent saving the duplicate symptom
    }
    const symptom = new Symptom(this.symptomName, this.symptomMeasurement);
    this.userService.get_symptoms().push(symptom);
    //this.router.navigate(['/symptom-editor']);

    this.save.emit(this.symptomName);
  }

  cancel_click() {
    this.cancel.emit();
  }

  ngOnInit(): void {
    if (typeof this.mode === 'undefined') {
        this.mode = 'add';
      }
      if (typeof this.symptomName ==='undefined'){
        this.symptomName = '';
      }
    }

    isAlertOpen = false;
    public alertButtons = ['OK'];
  
    setOpen(isOpen: boolean) {
      this.isAlertOpen = isOpen;
    }

}
