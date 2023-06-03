import { Component, Input, OnInit } from '@angular/core';
import { NavigationExtras, Router } from '@angular/router';
import { Symptom } from 'src/app/models/Symptom';
import { Treatment } from 'src/app/models/Treatment';
import { UserService } from 'src/app/user.service';

@Component({
  selector: 'app-configure-treatment',
  templateUrl: './configure-treatment.component.html',
  styleUrls: ['./configure-treatment.component.scss'],
})
export class ConfigureTreatmentComponent  implements OnInit {

  @Input() treatmentName!: string;  
  @Input() mode!: 'add' | 'edit';
  @Input() treatment!: Treatment |null;
  @Input() treatmentMeasurement!: string;


  add_to_static_survey: boolean = false;
  cancel_return_url: string = '';
  success_return_url: string ='';
  add_to_dynamic_survey:boolean = false;
  all_side_effects:Symptom[];
  selected_symptom_ids:string[];

  constructor(private userService: UserService, private router: Router){

    const inputs = history.state;
    this.add_to_static_survey = Boolean(inputs.add_to_static_survey);
    this.add_to_dynamic_survey = Boolean(inputs.add_to_dynamic_survey);
    this.success_return_url = inputs.success_return_url;
    this.cancel_return_url = inputs.cancel_return_url;
    this.all_side_effects = userService.get_side_effects();
    this.selected_symptom_ids =[];



   if (typeof inputs.treatment_id !=='undefined'){
    this.treatment = userService.getTreatmentByID(inputs.treatment_id);
    if(this.treatment!==null){
      this.mode = 'edit'
      this.treatmentName = this.treatment.name;
    }

   }

  }

  saveTreatment() {
    if(this.mode==='add'){
    const isNameDuplicate = this.userService.get_treatments().some(
      treatment => treatment.name.toLowerCase() === this.treatmentName.toLowerCase());

    if (isNameDuplicate) {
      this.setOpen(true);
      return; // Prevent saving the duplicate symptom
    }
  }

  const symptoms:Symptom[] = this.selected_symptom_ids.map(item => this.userService.getSideEffectByID(item)!);

  const treatment = new Treatment(this.treatmentName, this.treatmentMeasurement, symptoms);
  this.userService.add_treatment(treatment);
  if(this.add_to_dynamic_survey){
    this.userService.add_to_dynamic_survey(treatment);
  }
  if(this.add_to_static_survey){
    this.userService.add_to_static_survey(treatment);
  }
   // const symptom = new Symptom(this.symptomName, this.symptomMeasurement);

    // if (this.add_to_static_survey){
    //   this.userService.add_to_static_survey(symptom);
    // }
    // if (this.add_to_dynamic_survey){
    //   this.userService.add_to_dynamic_survey(symptom);


    // }
    // this.userService.add_symptom(symptom); 
    this.router.navigate([this.success_return_url]);

  }

  updateTreatment(){
    //add validation
    // this.symptom = this.symptom as Symptom;
    // this.symptom.changeMeasurement(this.symptomMeasurement);
    // this.treatment.name = this.treatmentName;
    // this.router.navigate([this.success_return_url]);

  }

  cancel_click() {
    this.router.navigate([this.cancel_return_url]);
  }

  ngOnInit(): void {


    if (typeof this.mode === 'undefined') {
        this.mode = 'add';
      }
      if (typeof this.treatmentName ==='undefined'){
        this.treatmentName = '';
        this.treatmentMeasurement = 'present';
      }


    }


    isAlertOpen = false;
    public alertButtons = ['OK'];
  
    setOpen(isOpen: boolean) {
      this.isAlertOpen = isOpen;
    }

    create_side_effect(){
      let navigationExtras: NavigationExtras;
      navigationExtras = {
        state: {
          add_to_static_survey: false,
          add_to_dynamic_survey: false,
          cancel_return_url: '/treatment-editor',
          success_return_url: '/treatment-editor',
        }
      };
      this.router.navigate(['/side-effect-editor'], navigationExtras);
    }

    selectionChanged(selected_symptom_ids: string[]) {
      this.selected_symptom_ids = selected_symptom_ids;
    }
}


