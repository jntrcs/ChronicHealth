import { Injectable } from '@angular/core';
import { UserData } from './models/UserData';
import { SurveyItem } from './models/SurveyItem';
import { Symptom } from './models/Symptom';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  private user_data: UserData;

constructor(){
  this.user_data = new UserData;
}

get_static_survey(){
  return(this.user_data.static_survey)
}

set_static_survey(static_survey: SurveyItem[]){
  this.user_data.static_survey = static_survey;
}

get_symptoms(){
  return(this.user_data.all_symptoms)
}

set_symptoms(symptoms: Symptom[]){
  this.user_data.all_symptoms = symptoms
}

}
