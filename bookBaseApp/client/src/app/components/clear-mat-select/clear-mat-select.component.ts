import { Component, OnInit, Output } from '@angular/core';
import { EventEmitter } from '@angular/core';

@Component({
  selector: 'app-clear-mat-select',
  templateUrl: './clear-mat-select.component.html',
  styleUrls: ['./clear-mat-select.component.scss']
})
export class ClearMatSelectComponent implements OnInit {

  constructor() { }


  @Output() setToDefault = new EventEmitter<string>();
  backToDefault:string = '';

  ngOnInit(): void {
  }

  handler(){
    this.setToDefault.emit(this.backToDefault);
  }

}
