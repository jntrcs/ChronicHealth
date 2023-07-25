import { v4 as uuidv4 } from 'uuid';
import { ItemRecord } from './ItemRecord';

export abstract class SurveyItem {
    public id: string;
    public name: string;
    public history_id: string;
    public history_place: number;

    constructor(name: string, history_id:string, history_place:number) {
        this.id = uuidv4();
        this.name = name;
        this.history_id = history_id; 
        this.history_place = history_place;
    }




    abstract set_to_default():void;
    abstract set_to_record(item_record: ItemRecord):SurveyItem;
}