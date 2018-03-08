import { RoomOptions } from './models/rooms-options';
import { Component, OnInit, ViewEncapsulation, AfterViewInit, OnDestroy, ChangeDetectionStrategy, ChangeDetectorRef } from '@angular/core';
import { GetFilterOptionsService } from './services/get-filter-options.service';
import { FilterOptions } from './models/filter-options';
import { Subscription } from 'rxjs/Subscription';

@Component({
  selector: 'app-hotels',
  templateUrl: './hotels.component.html',
  styleUrls: ['./hotels.component.scss'],
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HotelsComponent implements OnInit, AfterViewInit, OnDestroy {

  hotelOptions: Array<FilterOptions> = [];

  roomsOptions: Array<RoomOptions> = [];

  subscription: Subscription;

  constructor(private getFilterOptionsService: GetFilterOptionsService, private ref: ChangeDetectorRef) { }

  ngOnInit() {

  };

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  };

  ngAfterViewInit(): void {
    this._getHotelOptions();
    this._getRoomDescription();
  };

  _getHotelOptions() {
    this.subscription = this.getFilterOptionsService.getHotelOptions().subscribe((options: FilterOptions) => {
      this.hotelOptions.push(options);
      this.ref.detectChanges();
    });
  };

  _getRoomDescription() {
    this.subscription = this.getFilterOptionsService.getRoomOptions().subscribe((options: RoomOptions) => {
      this.roomsOptions.push(options);
      this.ref.detectChanges();
    });
  };

}
