import { Component, Input, OnInit } from '@angular/core';
import { Router, NavigationExtras } from '@angular/router';
import { Illness } from 'src/app/models/Illness';
import { Symptom } from 'src/app/models/Symptom';
import { UserService } from 'src/app/services/user.service';

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

    const item = userService.getLatestByID(inputs.history_id);

    if(item!==null){
      this.illness = item as Illness;
      this.mode = 'edit'
      this.illnessName = this.illness.name;
      this.selected_symptom_ids = this.illness.symptoms.map(item => item.id);
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


  const illness = Illness.createNewIllness(this.illnessName, symptoms);

  this.userService.add_illness(illness);
  if(this.add_to_dynamic_survey){
    this.userService.add_to_dynamic_survey(illness);
  }

  if(this.add_to_static_survey){
    this.userService.add_to_static_survey(illness);
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
    this.illness = this.illness!
    const isNameDuplicate = this.userService.filter_by_id(this.userService.get_illnesses(), [this.illness]).some(
      treatment => treatment.name.toLowerCase() === this.illnessName.toLowerCase());

    if (isNameDuplicate) {
      this.setOpen(true);
      return; // Prevent saving the duplicate symptom
    }

    this.userService.editIllness(this.illness, this.illnessName, this.selected_symptom_ids);

    this.router.navigate([this.success_return_url]);


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
