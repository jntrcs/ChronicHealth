import { v4 as uuidv4 } from 'uuid';
import { SurveyItem } from './SurveyItem';

export abstract class ItemRecord {

    public id:string;


      constructor() {
        this.id  = uuidv4();
      }

    //abstract get_item_record(survey_item: SurveyItem):ItemRecord;
    

    }