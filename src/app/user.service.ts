import { Injectable } from '@angular/core';
import { UserData } from './models/UserData';
import { SurveyItem } from './models/SurveyItem';
import { Symptom } from './models/Symptom';
import { DayRecord } from './models/DayRecord';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  private user_data: UserData;

constructor(){
  this.user_data = new UserData;
}


get_survey(){
  return(this.user_data.full_survey);
}

get_static_survey(){
  return(this.user_data.static_survey);
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

filter_by_id(all: SurveyItem[], remove: SurveyItem[]){
  const removeIds = remove.map(item => item.id);
  const itemsNotInRemove = all.filter(item => !removeIds.includes(item.id));
  return itemsNotInRemove;
}

remove_from_static_survey(index:number){
  this.user_data.static_survey.splice(index, 1);
}

add_to_static_survey(survey_item: SurveyItem){
  this.user_data.static_survey.push(survey_item);
}

getSurveyItemByID(id: string): Symptom | null{
  const symptom = this.user_data.all_symptoms.find((item: Symptom) => item.id === id);

  return(symptom||null);
}

create_day_record(survey: SurveyItem[], date:Date = new Date()){
  this.user_data.history.set(this.string_date(date), new DayRecord(survey));
  console.log(this.user_data.history);
}

public string_date(date: Date): string {
  return(date.toISOString().split('T')[0]);
}

}
