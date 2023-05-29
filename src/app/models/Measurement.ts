import { v4 as uuidv4 } from 'uuid';

export abstract class Measurement {
  name: string;
  color: string
  public id:string;
  constructor(name: string, color: string) {
    this.name=name;
    this.color = color;
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

}

export class PresentMeasurement extends Measurement {
  public isPresent: boolean = false;
  constructor(color: string) {
    super('present', color);
  }

  get_measurement_class():PresentMeasurement{
    return(this)
  }

  get_value(): string {
    return this.isPresent.toString()
  }
}

export class CountMeasurement extends Measurement {
  public count: number = 0;
  constructor(color:string) {
    super('count', color);
  }
  get_measurement_class():CountMeasurement{
    return(this)
  }

  get_value(): string {
    return this.count.toString()
  }
}

export class SeverityMeasurement extends Measurement {
  public severity: string = "None"
  constructor(color:string) {
    super('severity', color);
  }
  get_measurement_class():SeverityMeasurement{
    return(this)
  }

  get_value(): string {
    return this.severity;
  }
}
