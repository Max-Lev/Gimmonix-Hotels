import { Component, OnInit, Input, OnChanges, SimpleChanges, ViewEncapsulation } from '@angular/core';
import { FilterOptions } from '../hotels/models/filter-options';

@Component({
  selector: 'app-chips-buttons',
  templateUrl: './chips-buttons.component.html',
  styleUrls: ['./chips-buttons.component.scss']
})
export class ChipsButtonsComponent implements OnInit, OnChanges {

  @Input() hotelOptions: FilterOptions[] = [];

  constructor() { }

  ngOnInit() {
  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log(changes);
  }

  selected(option: FilterOptions) {
    option.isSelected = !option.isSelected;

  }

}
