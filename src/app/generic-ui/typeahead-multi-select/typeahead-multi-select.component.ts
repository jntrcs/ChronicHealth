import { Component, Input, Output, EventEmitter } from '@angular/core';
import type { OnInit } from '@angular/core';
import { SurveyItem } from 'src/app/models/SurveyItem';

@Component({
  selector: 'app-typeahead',
  templateUrl: 'typeahead-multi-select.component.html',
})
export class TypeaheadMultiSelectComponent implements OnInit {
  @Input() items: SurveyItem[] = [];
  @Input() selectedItems: string[] = [];
  @Input() mode!:string;
  
  color: string;

  constructor(){
    if (this.mode==='symptom'){
      this.color='symptom'
    }else{
      this.color="side-effect"
    }
  }

  @Output() selectionCancel = new EventEmitter<void>();
  @Output() selectionChange = new EventEmitter<string[]>();

  filteredItems: SurveyItem[] = [];
  workingSelectedValues: string[] = [];

  ngOnInit() {
    this.filteredItems = this.items;
    this.workingSelectedValues = [...this.selectedItems];
  }

  trackItems(index: number, item: SurveyItem) {

    return item.id;
  }

  cancelChanges() {

    this.selectionCancel.emit();
  }

  confirmChanges() {

    this.selectionChange.emit(this.workingSelectedValues);
  }

  searchbarInput(ev:any) {

    this.filterList(ev.target.value);
  }

  /**
   * Update the rendered view with
   * the provided search query. If no
   * query is provided, all data
   * will be rendered.
   */
  filterList(searchQuery: string | undefined) {

    /**
     * If no search query is defined,
     * return all options.
     */
    if (searchQuery === undefined) {
      this.filteredItems = this.items;
    } else {
      /**
       * Otherwise, normalize the search
       * query and check to see which items
       * contain the search query as a substring.
       */
      const normalizedQuery = searchQuery.toLowerCase();
      this.filteredItems = this.items.filter((item) => {
        return item.name.toLowerCase().includes(normalizedQuery);
      });
    }
  }

  isChecked(value: string) {
    return this.workingSelectedValues.find((item) => item === value);
  }

  checkboxChange(ev:any) {

    const { checked, value } = ev.detail;

    if (checked) {
      this.workingSelectedValues = [...this.workingSelectedValues, value];
    } else {
      this.workingSelectedValues = this.workingSelectedValues.filter((item) => item !== value);
    }
  }

}