import { v4 as uuidv4 } from 'uuid';
import { SurveyItem } from './SurveyItem';

export abstract class ItemRecord {

    public record_id:string;
    public survey_item_id:string;
    public history_id: string;
    public history_place:number;


    constructor(survey_item_id: string, history_id: string, history_place: number) {
      this.history_id = history_id;
      this.history_place = history_place;
      this.survey_item_id = survey_item_id;
        this.record_id  = uuidv4();
      }

    //abstract get_item_record(survey_item: SurveyItem):ItemRecord;
    abstract isActiveID(): string;
    //abstract set_item_to_record():void;

    }