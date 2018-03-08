import { Injectable } from '@angular/core';
import { FilterOptionsList, FilterOptions } from '../models/filter-options';
import { Observable } from 'rxjs/Observable';
import { Subject } from 'rxjs/Subject';
import { RoomOptions, RoomOptionsList } from '../models/rooms-options';
@Injectable()
export class GetFilterOptionsService {

  private filterOptionsList: Array<FilterOptions> = FilterOptionsList;
  private roomOptionsList: Array<RoomOptions> = RoomOptionsList;

  constructor() { };

  getHotelOptions(): Observable<FilterOptions> {
    const filters$: Subject<FilterOptions> = new Subject();
    setTimeout(() => { this.filterOptionsList.map(item => filters$.next(item)); }, 0);
    return filters$;
  };

  getRoomOptions(): Observable<RoomOptions> {
    const filters$: Subject<RoomOptions> = new Subject();
    setTimeout(() => { this.roomOptionsList.map(item => filters$.next(item)); }, 0);
    return filters$;
  };

}
