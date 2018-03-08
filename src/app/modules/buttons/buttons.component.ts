import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-buttons',
  templateUrl: './buttons.component.html',
  styleUrls: ['./buttons.component.css']
})
export class ButtonsComponent implements OnInit {

  constructor() { }

  ngOnInit() { };



  p1: Promise<boolean>;
  p1Result: boolean;
  p2: Promise<boolean>;
  p2Result: boolean;
  p3: Promise<boolean>;
  p3Result: boolean;
  p4: Promise<boolean[]>;
  p4Result: boolean;

  start() {
    this.p1Result = null;
    this.p2Result = null;
    this.p3Result = null;
    this.p4Result = null;

    this.p1 = this.task(1);
    this.p1.then(r => { this.p1Result = r; debugger; });
    this.p2 = this.task(2);
    this.p2.then(r => { this.p2Result = r; debugger; });
    this.p3 = this.task(3);
    this.p3.then(r => { this.p3Result = r; debugger; });

    this.p4 = Promise.all([this.p1, this.p2, this.p3]);
    this.p4.then(r => {
      this.p4Result = this.p1Result && this.p2Result && this.p3Result;
      debugger;
      if (!this.p4Result) {
        debugger;
        setTimeout(() => { this.start(); }, 1000);
      }
    });
  }

  task(sec: number): Promise<boolean> {
    return new Promise((resolve, reject) => {
      debugger;
      setTimeout(() => {
        debugger;
        const num = Math.round(Math.random() * (100 - 0) + 0);
        resolve(num % 2 === 0);
      }, sec * 1000);
    });
  }

}
