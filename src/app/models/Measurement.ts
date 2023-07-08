import { v4 as uuidv4 } from 'uuid';

export abstract class Measurement {
  name: string;
 // color: string
  public id:string;
  constructor(name: string) {
    this.name=name;
    //this.color = color;
    this.id = uuidv4();

  }

  isPresentMeasurement():boolean{
    return this instanceof PresentMeasurement;
  }

  isCountMeasurement():boolean{
    return this instanceof CountMeasurement;
  }

  isSeverityMeasurement():boolean{
    return this instanceof SeverityMeasurement;
  }

  abstract get_measurement_class():any;
  abstract get_value():string;
  abstract set_value(value:string):void;
  abstract set_value_to_default():void;

}

export class PresentMeasurement extends Measurement {
  public isPresent: boolean = false;
  constructor() {
    super('present');
  }

  get_measurement_class():PresentMeasurement{
    return(this)
  }

  get_value(): string {
    return this.isPresent.toString()
  }

  set_value(value:string){
    this.isPresent = value==='true';
  }

  override set_value_to_default(): void {
    this.isPresent = false;
  }
}

export class CountMeasurement extends Measurement {
  public count: number = 0;
  constructor() {
    super('count');
  }
  get_measurement_class():CountMeasurement{
    return(this)
  }

  get_value(): string {
    return this.count.toString()
  }

  set_value(value:string){
    this.count = parseInt(value);
  }

  override set_value_to_default(): void {
    this.count = 0;
  }
}

export class SeverityMeasurement extends Measurement {
  public severity: string = "None"
  constructor() {
    super('severity');
  }
  get_measurement_class():SeverityMeasurement{
    return(this)
  }

  get_value(): string {
    return this.severity;
  }

  set_value(value:string){
    this.severity = value;
  }

  override set_value_to_default(): void {
    this.severity = "None";
  }
}
