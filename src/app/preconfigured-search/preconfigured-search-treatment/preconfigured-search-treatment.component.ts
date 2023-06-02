import { Component, OnInit } from '@angular/core';
import { NavigationExtras, Router } from '@angular/router';
import { SurveyItem } from 'src/app/models/SurveyItem';
import { UserService } from 'src/app/user.service';

@Component({
  selector: 'app-preconfigured-search-treatment',
  templateUrl: './preconfigured-search-treatment.component.html',
  styleUrls: ['./preconfigured-search-treatment.component.scss'],
})
export class PreconfiguredSearchTreatmentComponent  implements OnInit {

  treatment_list: SurveyItem[];
  source:string;
  add_to_dynamic_survey:boolean=true;
  add_to_static_survey:boolean=false; 

  constructor(private userService: UserService, private router:Router) {
    this.treatment_list = [];

    const inputs = history.state;

    this.source = inputs.source;
    if (this.source === "dynamic survey adder"){
      this.treatment_list = userService.filter_by_id(userService.get_treatments(), userService.get_survey());

    }
   }

  ngOnInit() {}

  openTreatmentCreator(){
    let navigationExtras: NavigationExtras;
    

    if (this.source === 'dynamic survey adder') {
        navigationExtras = {
          state: {
            add_to_static_survey: false,
            add_to_dynamic_survey: true,
            cancel_return_url: '/preconfigured-search-treatment',
            success_return_url: '/'
          }
        };
      } else {
        // Default navigation extras if neither condition is met
        navigationExtras = {
          state: {
            // Default values if needed
          }
        };

  }
  this.router.navigate(['/treatment-editor'], navigationExtras);

}

}
