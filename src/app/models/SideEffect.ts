import { Symptom } from "./Symptom";

export class SideEffect extends Symptom {

    constructor(
        name: string,
        measurementString: string, 
      ) {
        super(name, measurementString);
      }

}