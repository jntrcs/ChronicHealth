import { v4 as uuidv4 } from 'uuid';

export abstract class SurveyItem {
    public id: string;
    public name: string;

    constructor(name: string) {
        this.id = uuidv4();
        this.name = name;
    }

    abstract set_to_default():void;
}