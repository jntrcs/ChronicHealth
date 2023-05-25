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
  @Input() symptom!: Symptom |null;

  add_to_static_survey: boolean = false;
  cancel_return_url: string = '';
  success_return_url: string ='';

  constructor(private userService: UserService, private router: Router){
    const inputs = history.state;
    this.add_to_static_survey = inputs.add_to_static_survey;
    this.success_return_url = inputs.success_return_url;
    this.cancel_return_url = inputs.cancel_return_url;

   if (typeof inputs.symptom_id !=='undefined'){
    this.symptom = userService.getSurveyItemByID(inputs.symptom_id);
    if(this.symptom!==null){
      this.mode = 'edit'
      this.symptomName = this.symptom.name;
      this.symptomMeasurement = this.symptom.measurement.name;
    }

   }

  }

  saveSymptom() {
    if(this.mode==='add'){
    const isNameDuplicate = this.userService.get_symptoms().some(
      symptom => symptom.name.toLowerCase() === this.symptomName.toLowerCase());

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

  updateSymptom(){
    //add validation
    this.symptom = this.symptom as Symptom;
    this.symptom.changeMeasurement(this.symptomMeasurement);
    this.symptom.name = this.symptomName;
    this.router.navigate([this.success_return_url]);

  }

  cancel_click() {
    this.router.navigate([this.cancel_return_url]);
  }

  ngOnInit(): void {


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
