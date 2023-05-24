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

  add_to_static_survey: boolean = false;
  cancel_return_url: string = '';
  success_return_url: string ='';

  constructor(private userService: UserService, private router: Router){

  }

  saveSymptom() {
    if(this.mode==='add'){
    const isNameDuplicate = this.userService.get_symptoms().some(symptom => symptom.name.toLowerCase() === this.symptomName.toLowerCase());
    if (isNameDuplicate) {
      this.setOpen(true);
      return; // Prevent saving the duplicate symptom
    }
  }
    const symptom = new Symptom(this.symptomName, this.symptomMeasurement);
    if (this.add_to_static_survey){
      this.userService.add_to_static_survey(symptom);
    }
    this.userService.get_symptoms().push(symptom);
    this.router.navigate([this.success_return_url]);

  }

  cancel_click() {
    this.router.navigate([this.cancel_return_url]);
  }

  ngOnInit(): void {

    const inputs = history.state;
    this.add_to_static_survey = inputs.add_to_static_survey;
    this.success_return_url = inputs.success_return_url;
    this.cancel_return_url = inputs.cancel_return_url;
    
    // Use the inputs as needed
    const input1 = inputs.add_to_static_survey;

    if (typeof this.mode === 'undefined') {
        this.mode = 'add';
      }
      if (typeof this.symptomName ==='undefined'){
        this.symptomName = '';
      }
      if (typeof this.symptomMeasurement ==='undefined'){
        this.symptomMeasurement = 'severity';
      }
    }

    isAlertOpen = false;
    public alertButtons = ['OK'];
  
    setOpen(isOpen: boolean) {
      this.isAlertOpen = isOpen;
    }

}
