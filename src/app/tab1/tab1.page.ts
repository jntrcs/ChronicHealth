import { Symptom } from '../models/Symptom';
import { Component } from '@angular/core';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {
  public symptoms: Symptom[] = [
    new Symptom('Headache', 'bandage-outline', 'severity'),
    new Symptom('Fever', 'bandage-outline', 'present'),
    new Symptom('Cough', 'bandage-outline', 'count')
    // Add more symptoms here as needed
  ];

  constructor() {}
}