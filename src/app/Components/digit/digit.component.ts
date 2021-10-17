import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-digit',
  templateUrl: './digit.component.html',
  styleUrls: ['./digit.component.css'],
})
export class DigitComponent implements OnInit {
  @Input() digit = '';

  @Output() digitEmitter = new EventEmitter<string>();

  constructor() {}

  ngOnInit(): void {}

  digitClicked() {
    this.digitEmitter.emit(this.digit);
  }
}
