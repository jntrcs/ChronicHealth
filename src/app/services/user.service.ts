import { Injectable } from '@angular/core';
import { UserData } from '../models/UserData';
import { SurveyItem } from '../models/SurveyItem';
import { Symptom } from '../models/Symptom';
import { DayRecord } from '../models/DayRecord';
import { Illness } from '../models/Illness';
import { Treatment } from '../models/Treatment';
import { AppStateService } from './app-state.service';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  private user_data: UserData;

constructor(private appState:AppStateService){
  this.user_data = new UserData;
}


get_survey(){
  return([...this.user_data.static_survey, ...this.user_data.dynamic_survey]);
}

get_static_survey(){
  return(this.user_data.static_survey);
}

get_dynamic_survey(){
  return(this.user_data.dynamic_survey);
}

set_static_survey(static_survey: SurveyItem[]){
  this.user_data.static_survey = static_survey;
}

get_symptoms(){
  return(this.user_data.all_symptoms)
}

get_side_effects(){
  return(this.user_data.all_side_effects)
}

get_illnesses(){
  return(this.user_data.all_illnesses)
}

get_treatments(){
  return(this.user_data.all_treatments)
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
  // If adding to static survey, remove it from dynamic survey
  this.remove_from_dynamic_survey(survey_item);
}

add_to_dynamic_survey(survey_item: SurveyItem){
  this.user_data.dynamic_survey.push(survey_item);
}

remove_from_dynamic_survey(survey_item:SurveyItem){
  this.filter_by_id(this.user_data.dynamic_survey, [survey_item]);
}

getSymptomByID(id: string): Symptom | null{
  const symptom = this.user_data.all_symptoms.find((item: Symptom) => item.id === id);

  return(symptom||null);
}

getSideEffectByID(id: string): Symptom | null{
  const symptom = this.user_data.all_side_effects.find((item: Symptom) => item.id === id);

  return(symptom||null);
}

getIllnessByID(id: string): Illness | null{
  const illness = this.user_data.all_illnesses.find((item: Illness) => item.id === id);

  return(illness||null);
}

getTreatmentByID(id: string): Treatment | null{
  const treatment = this.user_data.all_treatments.find((item: Treatment) => item.id === id);

  return(treatment||null);
}



create_day_record(survey: SurveyItem[], date:Date = new Date()){
  this.user_data.history.set(this.appState.string_date, new DayRecord(survey));
  console.log(this.user_data.history);
}



public add_symptom(symptom:Symptom){
  this.get_symptoms().push(symptom);
  this.user_data.sortSurveyItemsByName(this.get_symptoms());

}

public add_side_effect(symptom:Symptom){
  this.get_side_effects().push(symptom);
  this.user_data.sortSurveyItemsByName(this.get_side_effects());

}

public add_treatment(treatment:Treatment){
  this.get_treatments().push(treatment);
  this.user_data.sortSurveyItemsByName(this.get_treatments());

}

public add_illness(illness:Illness){
  this.get_illnesses().push(illness);
  this.user_data.sortSurveyItemsByName(this.get_illnesses());

}

public check_day_has_data(date: string){

  return this.user_data.history.has(date);
}



}
