import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.scss'],
})
export class ToolbarComponent implements OnInit {
  constructor() {}

  @Output() searchInput = new EventEmitter<string>();

  ngOnInit(): void {}

  onSubmit(value: string) {
    this.searchInput.emit(value);
  }
}
