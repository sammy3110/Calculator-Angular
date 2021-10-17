import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-operator',
  templateUrl: './operator.component.html',
  styleUrls: ['./operator.component.css'],
})
export class OperatorComponent implements OnInit {
  @Input() type = '';
  @Input() operator = '0';

  @Output() operatorEmitter = new EventEmitter<string>();

  constructor() {}

  ngOnInit(): void {}

  operatorClicked() {
    this.operatorEmitter.emit(this.operator);
  }
}
