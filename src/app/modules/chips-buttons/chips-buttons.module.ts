import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChipsButtonsComponent } from './chips-buttons.component';
import { MatChipsModule } from '@angular/material/chips';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
@NgModule({
  imports: [
    CommonModule,
    MatButtonToggleModule,
    MatChipsModule
  ],
  exports: [
    ChipsButtonsComponent
  ],
  declarations: [ChipsButtonsComponent]
})
export class ChipsButtonsModule { }
