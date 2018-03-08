import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChipsButtonsComponent } from './chips-buttons.component';

describe('ChipsButtonsComponent', () => {
  let component: ChipsButtonsComponent;
  let fixture: ComponentFixture<ChipsButtonsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChipsButtonsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChipsButtonsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
