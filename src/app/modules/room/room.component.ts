import { Component, OnInit, ViewEncapsulation, Input, OnChanges, SimpleChanges } from '@angular/core';
import { RoomOptions } from '../hotels/models/rooms-options';

@Component({
  selector: 'app-room',
  templateUrl: './room.component.html',
  styleUrls: ['./room.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class RoomComponent implements OnInit, OnChanges {

  @Input() roomsOptions: RoomOptions[] = [];

  constructor() { }

  ngOnInit() {
  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log(changes);
  }

}
