import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RoomComponent } from './room.component';
import { DescriptionComponent } from './description/description.component';
import { DetailsComponent } from './details/details.component';
import { MatListModule } from '@angular/material/list';
@NgModule({
  imports: [
    CommonModule,
    MatListModule
  ],
  declarations: [
    RoomComponent,
    DescriptionComponent,
    DetailsComponent
  ],
  exports: [RoomComponent]
})
export class RoomModule { }
