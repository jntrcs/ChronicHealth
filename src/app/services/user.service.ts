import { Injectable } from '@angular/core';
import { UserData } from '../models/UserData';
import { SurveyItem } from '../models/SurveyItem';
import { Symptom } from '../models/Symptom';
import { DayRecord } from '../models/DayRecord';
import { Illness } from '../models/Illness';
import { Treatment } from '../models/Treatment';
import { AppStateService } from './app-state.service';
import { IllnessRecord } from '../models/IllnessRecord';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  private user_data: UserData;

constructor(private appState:AppStateService){
  this.user_data = new UserData;
}


get_survey(){
  return([...this.user_data.static_survey, ...this.user_data.dynamic_survey, ...this.get_historical_survey(this.appState.get_string_date())]);
}

get_static_survey(){
  return(this.user_data.static_survey);
}

//Use calculate dynamic survey if you want to calculate and set dynamic survey for a specific date
calculate_dynamic_survey(date:string):SurveyItem[]{
    //If that date is already in the data set, we should not return anything
    if(this.user_data.history.has(date)){
      this.user_data.dynamic_survey = [];
      return this.user_data.dynamic_survey;
    }

  const all_active_ids: string[] = this.user_data.determine_active_item_ids(date);
  const all_active_items = all_active_ids.map((id)=>this.getSurveyItemByID(id)).filter((item): item is SurveyItem => item !== null);
  const not_in_static = this.filter_by_id(all_active_items, this.user_data.static_survey)
  this.user_data.dynamic_survey = not_in_static;



  //dedupe any symptoms that appear in an illness
  this.user_data.dynamic_survey.map(survey_item=>{
    if (survey_item.constructor.name==='Illness'){
      const illness = (survey_item as Illness);
      this.filter_from_dynamic_survey(illness.symptoms);

      }
    });

      //Also figure out if the illness needs to marked as suspected or confirmed

          // Figure out state of illness
          const survey_date = new Date(date);
          const date_strings = Array.from(this.user_data.history.keys());
          const dateObjects = date_strings.map((dateString) => new Date(dateString));
          //remove future dates
          const pastDates = dateObjects.filter((element) => element < survey_date);
          pastDates.sort((a, b) => b.getTime() - a.getTime());
          if(pastDates.length <1){
            return [];
          }
      
    
          const record: DayRecord = this.user_data.history.get(pastDates[0].toLocaleString().split(',')[0])!
          const active_illnesses = record.active_illness_ids;

          active_illnesses.forEach(illness_id=>{
            (this.getSurveyItemByID(illness_id) as Illness).doctor_confirmed = record.getConfirmedStatus(illness_id);
          })

  return(this.user_data.dynamic_survey);
}

// use get dynamic survey if you want to get the dynamic survey that's already calculated.
get_dynamic_survey():SurveyItem[]{
  return this.user_data.dynamic_survey;
}

set_dynamic_survey(dynamic_survey:SurveyItem[]){
  this.user_data.dynamic_survey = dynamic_survey;
}

filter_from_dynamic_survey(items: SurveyItem[]){
  this.user_data.dynamic_survey = this.filter_by_id(this.get_dynamic_survey(), items)
}

set_static_survey(static_survey: SurveyItem[]){
  this.user_data.static_survey = static_survey;
}

get_symptoms(){
  return(this.user_data.all_symptoms)
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
  this.user_data.dynamic_survey = this.filter_by_id(this.user_data.dynamic_survey, [survey_item]);
}

getSymptomByID(id: string): Symptom | null{
  const symptom = this.user_data.all_symptoms.find((item: Symptom) => item.id === id);

  return(symptom||null);
}

getSurveyItemByID(id:string):SurveyItem | null{
  const symptom = this.getSymptomByID(id);
  if (symptom!==null){
    return(symptom);
  }
  const treatment = this.getTreatmentByID(id)
  if (treatment!==null){
    return(treatment);
  }
  const illness = this.getIllnessByID(id)
  if (illness!==null){
    return(illness);
  }
  return null;
}


getIllnessByID(id: string): Illness | null{
  const illness = this.user_data.all_illnesses.find((item: Illness) => item.id === id);

  return(illness||null);
}

getTreatmentByID(id: string): Treatment | null{
  const treatment = this.user_data.all_treatments.find((item: Treatment) => item.id === id);

  return(treatment||null);
}

getLatestByID(history_id: string): SurveyItem | null{

  const hist = this.user_data.item_history.get(history_id)!
  return(hist[hist?.length-1])

}

getHistoricByID(history_id: string, survey_item_id:string): SurveyItem {

  const hist = this.user_data.item_history.get(history_id)!
  return(hist.filter(item =>item.id==survey_item_id).pop()!)

}


create_day_record(survey: SurveyItem[]){
  // Let's de-dupe all items in the survey so if something is in the static survey and the history it doesn't get replicated

  survey = this.removeDuplicateIds(survey);
  const day_record = new DayRecord(survey);

  this.user_data.history.set(this.appState.string_date, day_record);
  const date = this.appState.survey_date;

  // we need to back date the illness confirmation history to previous days.
  // If I first recorded an illness on Monday, but I confirm it on Wednesday, it should look as if it's always been confirmed. 
  // And actually, we need to check this going forward and backward. If I confirm it Monday, it should be confirmed Wdnesday

  const all_illness_ids = day_record.active_illness_ids.concat(day_record.expiring_illness_ids);
  if(all_illness_ids.length>0){
    const date_strings = Array.from(this.user_data.history.keys());
    const dateObjects = date_strings.map((dateString) => new Date(dateString));
    //remove future dates
    const pastDates = dateObjects.filter((element) => element < date);
    pastDates.sort((a, b) => b.getTime() - a.getTime());

    const futureDates = dateObjects.filter((element) => element > date);
    futureDates.sort((a, b) => a.getTime() - b.getTime());

    all_illness_ids.forEach(id => {
      const illness_record = day_record.records.filter(item=>item.survey_item_id ===id).pop() as IllnessRecord;
      let actionPerformed = false; // Flag to track if the action has been performed

      for (let i = 0; i < pastDates.length; i++) {
        const dateString = pastDates[i].toLocaleString().split(',')[0];
        const pastDayRecord = this.user_data.history.get(dateString);
        
        if (pastDayRecord?.active_illness_ids.includes(id)) {
          pastDayRecord.records.filter(record => record instanceof IllnessRecord).
          forEach(previous_illness_record=>((previous_illness_record) as IllnessRecord).doctor_confirmed = illness_record.doctor_confirmed);
          actionPerformed = true;
        } else {
          // Exit the loop when active_illness_ids no longer contains id
          break;
        }
      }

        for (let i = 0; i < futureDates.length; i++) {
          const dateString = futureDates[i].toLocaleString().split(',')[0];
          const futureDayRecord = this.user_data.history.get(dateString);
      
          if (futureDayRecord?.active_illness_ids.includes(id)) {
            futureDayRecord.records.filter(record => record instanceof IllnessRecord).
            forEach(future_illness_record=>((future_illness_record) as IllnessRecord).doctor_confirmed = illness_record.doctor_confirmed);
            actionPerformed = true;
          } else {
            // Exit the loop when active_illness_ids no longer contains id
            break;
          }

      }
    });




  }





}



public add_symptom(symptom:Symptom){
  this.add_history_item(symptom);

  this.get_symptoms().push(symptom);

  this.user_data.sortSurveyItemsByName(this.get_symptoms());
}

public remove_symptom(symptom:Symptom){
  this.user_data.all_symptoms = this.filter_by_id(this.user_data.all_symptoms, [symptom]).map(item=>item as Symptom);
}


public remove_treatment(treatment:Treatment){
  const latest_treatment = this.getLatestByID(treatment.history_id)!;

  this.user_data.all_treatments = this.filter_by_id(this.user_data.all_treatments, [latest_treatment]).map(item=>item as Treatment);
}

public remove_illness(illness:Illness){
  const latest_illness = this.getLatestByID(illness.history_id)!;
  this.user_data.all_illnesses = this.filter_by_id(this.user_data.all_illnesses, [latest_illness]).map(item=>item as Illness);
}



public add_treatment(treatment:Treatment){
  this.add_history_item(treatment);
  this.get_treatments().push(treatment);
  this.user_data.sortSurveyItemsByName(this.get_treatments());

}

public add_illness(illness:Illness){
  this.add_history_item(illness);
  this.get_illnesses().push(illness);
  this.user_data.sortSurveyItemsByName(this.get_illnesses());

}

public check_day_has_data(date: string){

  return this.user_data.history.has(date);
}

//public set_items_to_days_values(date: string){
 // const record: DayRecord = this.user_data.history.get(date)!;
 // record.set_survey_item_values();
//}
public set_items_to_default(){
  this.user_data.static_survey.map(item=>item.set_to_default());
  this.user_data.dynamic_survey.map(item=>item.set_to_default());

}

public get_history_item(history_id: string, position:number):SurveyItem{
  return this.user_data.item_history.get(history_id)![position];
}

public add_history_item(survey_item:SurveyItem){

  if(survey_item.history_place===0){
    this.user_data.item_history.set(survey_item.history_id, [survey_item])
  }else{ // this probably doesn't work because you can't just set arbitrary places in an array like that.
    this.user_data.item_history.get(survey_item.history_id)!.push(survey_item);

  }
}

public get_next_history_slot(history_id:string){
  return this.user_data.item_history.get(history_id)!.length;
}

public editSymptom(old_symptom:Symptom, new_name:string, new_measurement:string){
  // if name and measurement string are the same, do nothing
  // if name is different, change all names in the history stack
  // if measurementstring is different, create a new symptom with a new measurement; remove the old symptom from all symptoms; add new to stack
  if(new_name!==old_symptom.name){
    this.update_all_history_names(old_symptom.history_id, new_name);
  }
  if(new_measurement!== old_symptom.measurement.name){
    var symptom:Symptom = Symptom.createEditedSymptom(new_name, new_measurement, old_symptom.history_id, 
      this.get_next_history_slot(old_symptom.history_id));

    this.add_symptom(symptom);
    this.remove_symptom(old_symptom);
      //if symptom is in static or dynamic survey, replace it with the new symptom
  this.user_data.dynamic_survey = this.replaceSurveyItem(this.user_data.dynamic_survey, old_symptom.id, symptom)
  this.user_data.static_survey = this.replaceSurveyItem(this.user_data.static_survey, old_symptom.id, symptom)

  // Any time a symptom is edited, we need to search through all illnesses/treatments and also edit them

  const treatmentsWithTargetSymptom = this.user_data.all_treatments.filter(treatment =>
    treatment.side_effects.some(side_effect => side_effect.id === old_symptom.id)
  );
  
  // Do something with the filtered treatments
  treatmentsWithTargetSymptom.forEach(treatment => {
    // Your logic to handle the treatments with the target symptom ID
    const side_effect_ids = treatment.side_effects.map(side_effect=>side_effect.id).filter(id=>id!=old_symptom.id);
    side_effect_ids.push(symptom.id);
    this.editTreatment(treatment, treatment.name,
        treatment.measurement.name, 
        side_effect_ids);
  });


  //Now do the same thing for illnesses
  const illnessessWithTargetSymptom = this.user_data.all_illnesses.filter(treatment =>
    treatment.symptoms.some(side_effect => side_effect.id === old_symptom.id)
  );
  
  // Do something with the filtered treatments
  illnessessWithTargetSymptom.forEach(illness => {
    const symptom_ids = illness.symptoms.map(symptom=>symptom.id).filter(id=>id!=old_symptom.id);
    symptom_ids.push(symptom.id);
    this.editIllness(illness, illness.name,
      symptom_ids);
  });
  }


}



public replaceSurveyItem(survey_items: SurveyItem[], id: string, new_survey_item: SurveyItem): SurveyItem[] {
  const updatedSymptoms = [...survey_items]; // Create a copy of the original array

  const index = updatedSymptoms.findIndex(symptom => symptom.id === id);
  if (index !== -1) {
    updatedSymptoms[index] = new_survey_item;
  }
  return updatedSymptoms;
}

public editTreatment(old_treatment:Treatment, new_name:string, new_measurement:string, new_side_effect_ids:string[]){
  // if name and measurement string are the same, do nothing
  // if name is different, change all names in the history stack
  // if measurementstring is different, create a new symptom with a new measurement; remove the old symptom from all symptoms; add new to stack
  if(new_name!==old_treatment.name){
    this.update_all_history_names(old_treatment.history_id, new_name);
  }

  const same_side_effects = this.areArraysEqual(old_treatment.side_effects.map(item=>item.id), new_side_effect_ids);



  if(new_measurement!== old_treatment.measurement.name || !same_side_effects){
    var treatment:Treatment = Treatment.createEditedTreatment(new_name, new_measurement,
      new_side_effect_ids.map(id => this.getSymptomByID(id)).filter((item): item is Symptom => item !== null) ,
      old_treatment.history_id,   
      this.get_next_history_slot(old_treatment.history_id));
      this.remove_treatment(old_treatment);

    this.add_treatment(treatment);
    this.user_data.dynamic_survey = this.replaceSurveyItem(this.user_data.dynamic_survey, old_treatment.id, treatment)
    this.user_data.static_survey = this.replaceSurveyItem(this.user_data.static_survey, old_treatment.id, treatment)
  }

}
 
//helper function to determine if two arrays have the exact same elements
private areArraysEqual(array1: string[], array2: string[]): boolean {
  if (array1.length !== array2.length) {
    return false;
  }

  const sortedArray1 = array1.slice().sort();
  const sortedArray2 = array2.slice().sort();

  for (let i = 0; i < sortedArray1.length; i++) {
    if (sortedArray1[i] !== sortedArray2[i]) {
      return false;
    }
  }

  return true;
}

public removeDuplicateIds (arr: SurveyItem[]): SurveyItem[] {
  const idSet = new Set<string>();
  const filteredArr: SurveyItem[] = [];

  for (const item of arr) {
    if (!idSet.has(item.id)) {
      idSet.add(item.id);
      filteredArr.push(item);
    }
  }

  return filteredArr;
}


public editIllness(old_illness:Illness, new_name:string, new_symptom_ids:string[]): Illness{
  if(new_name!==old_illness.name){
    this.update_all_history_names(old_illness.history_id, new_name);
  }

  const same_side_effects = this.areArraysEqual(old_illness.symptoms.map(item=>item.id), new_symptom_ids);
  if(!same_side_effects){
    var illness:Illness = Illness.createEditedIllness(new_name,
      new_symptom_ids.map(id => this.getSymptomByID(id)).filter((item): item is Symptom => item !== null) ,
      old_illness.history_id,   
      this.get_next_history_slot(old_illness.history_id));
      this.remove_illness(old_illness);
    this.add_illness(illness);
    this.user_data.dynamic_survey = this.replaceSurveyItem(this.user_data.dynamic_survey, old_illness.id, illness)
    this.user_data.static_survey = this.replaceSurveyItem(this.user_data.static_survey, old_illness.id, illness)
    return(illness);

  }
  return(old_illness);
}


public update_all_history_names(history_id:string, new_name:string){
  const items: SurveyItem[] = this.user_data.item_history.get(history_id)!;
  items.map(item=>item.name = new_name);

}

public get_historical_survey(date:string){
    //If that date is already in the data set, we also need to return anything specifically recorded for that date.
  if(this.user_data.history.has(date)){
    const day = this.user_data.history.get(date)!;
    const items = day.records.map(item=>this.get_survey_item_from_history(item.history_id, item.history_place).set_to_record(item)).
      filter((item): item is SurveyItem => item !== null);
      return items
  }else return [];
}

public get_survey_item_from_history(history_id: string, history_place:number):SurveyItem{
  return this.user_data.item_history.get(history_id)![history_place];
}

public replaceItemInDynamicSurvey(old_item: SurveyItem, new_item: SurveyItem){

  const index =this.get_dynamic_survey().map(item=>item.id).findIndex(id => id===old_item.id);
  this.get_dynamic_survey().splice(index, 1, new_item);
}

}
 