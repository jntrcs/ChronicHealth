import { Component, Input, OnInit } from '@angular/core';
import { Router, NavigationExtras } from '@angular/router';
import { Illness } from 'src/app/models/Illness';
import { Symptom } from 'src/app/models/Symptom';
import { UserService } from 'src/app/user.service';

@Component({
  selector: 'app-configure-illness',
  templateUrl: './configure-illness.component.html',
  styleUrls: ['./configure-illness.component.scss'],
})
export class ConfigureIllnessComponent  implements OnInit {

  @Input() illnessName!: string;  
  @Input() mode!: 'add' | 'edit';
  @Input() illness!: Illness |null;

  add_to_static_survey: boolean = false;
  cancel_return_url: string = '';
  success_return_url: string ='';
  add_to_dynamic_survey:boolean = false;
  all_symptoms:Symptom[];
  selected_symptom_ids:string[];

  constructor(private userService: UserService, private router: Router){

    const inputs = history.state;
    this.add_to_static_survey = Boolean(inputs.add_to_static_survey);
    this.add_to_dynamic_survey = Boolean(inputs.add_to_dynamic_survey);
    this.success_return_url = inputs.success_return_url;
    this.cancel_return_url = inputs.cancel_return_url;
    this.all_symptoms = userService.get_symptoms();
    this.selected_symptom_ids =[];


   if (typeof inputs.illness_id !=='undefined'){
    this.illness = userService.getIllnessByID(inputs.illness_id);
    if(this.illness!==null){
      this.mode = 'edit'
      this.illnessName = this.illness.name;
    }

   }

  }

  saveIllness() {
    if(this.mode==='add'){
    const isNameDuplicate = this.userService.get_illnesses().some(
      illness => illness.name.toLowerCase() === this.illnessName.toLowerCase());

    if (isNameDuplicate) {
      this.setOpen(true);
      return; // Prevent saving the duplicate symptom
    }
  }


  const symptoms:Symptom[] = this.selected_symptom_ids.map(item => this.userService.getSymptomByID(item)!);


  const illness = new Illness(this.illnessName, symptoms);
  if(this.add_to_dynamic_survey){
    this.userService.add_to_dynamic_survey(illness);
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

  updateIllness(){
    //add validation
    // this.symptom = this.symptom as Symptom;
    // this.symptom.changeMeasurement(this.symptomMeasurement);
    // this.illness.name = this.illnessName;
    // this.router.navigate([this.success_return_url]);

  }

  cancel_click() {
    this.router.navigate([this.cancel_return_url]);
  }

  ngOnInit(): void {


    if (typeof this.mode === 'undefined') {
        this.mode = 'add';
      }
      if (typeof this.illnessName ==='undefined'){
        this.illnessName = '';
      }


    }


    isAlertOpen = false;
    public alertButtons = ['OK'];
  
    setOpen(isOpen: boolean) {
      this.isAlertOpen = isOpen;
    }

    create_symptom(){
      let navigationExtras: NavigationExtras;
      navigationExtras = {
        state: {
          add_to_static_survey: false,
          add_to_dynamic_survey: false,
          cancel_return_url: '/illness-editor',
          success_return_url: '/illness-editor'
        }
      };
      this.router.navigate(['/symptom-editor'], navigationExtras);
    }


    selectionChanged(selected_symptom_ids: string[]) {
      this.selected_symptom_ids = selected_symptom_ids;
    }
}
