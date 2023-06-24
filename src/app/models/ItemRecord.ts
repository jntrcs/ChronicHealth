import { v4 as uuidv4 } from 'uuid';
import { SurveyItem } from './SurveyItem';

export abstract class ItemRecord {

    public record_id:string;
    public survey_item_id:string;


    constructor(survey_item_id: string) {
      this.survey_item_id = survey_item_id;
        this.record_id  = uuidv4();
      }

    //abstract get_item_record(survey_item: SurveyItem):ItemRecord;
    abstract isActiveID(): string;
    abstract set_item_to_record():void;

    }