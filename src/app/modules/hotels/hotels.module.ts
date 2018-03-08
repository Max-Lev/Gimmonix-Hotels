import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HotelsComponent } from './hotels.component';
import { Routes, RouterModule } from '@angular/router';
import { ChipsButtonsModule } from '../chips-buttons/chips-buttons.module';
import { GetFilterOptionsService } from './services/get-filter-options.service';
import { RoomModule } from '../room/room.module';

const routes: Routes = [
  {
    path: '', component: HotelsComponent
  }
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    ChipsButtonsModule,
    RoomModule
  ],
  providers:[GetFilterOptionsService],
  declarations: [HotelsComponent]
})
export class HotelsModule { }
