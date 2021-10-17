import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

export interface EqualData {
  label: string;
  firstOperand: number;
  equalPressed: boolean;
  operator: string;
  display: string;
}

@Component({
  selector: 'app-equal',
  templateUrl: './equal.component.html',
  styleUrls: ['./equal.component.css'],
})
export class EqualComponent implements OnInit {
  @Input() label = '';
  @Input() firstOperand = 0;
  @Input() equalPressed = false;
  @Input() operator = '';
  @Input() display = '';

  @Output() equalEmitter = new EventEmitter<EqualData>();

  constructor() {}

  ngOnInit(): void {}

  assignValues(v: EqualData) {
    this.label = v.label;
    this.firstOperand = v.firstOperand;
    this.equalPressed = v.equalPressed;
    this.operator = v.operator;
    this.display = v.display;
  }
  // .................  Function to handle equal click  ..............
  equals(op: string) {
    if (this.label === '') return;
    let result = '';
    if (op === '=') {
      this.firstOperand = parseFloat(
        this.label.substr(0, this.label.length - 2)
      );
      this.equalPressed = true;
    }
    switch (this.operator) {
      case '+':
        result = (this.firstOperand + parseFloat(this.display)).toString();
        break;
      case 'X':
        result = (this.firstOperand * parseFloat(this.display)).toString();
        break;
      case '-':
        result = (this.firstOperand - parseFloat(this.display)).toString();
        break;
      case '/':
        result = (this.firstOperand / parseFloat(this.display)).toString();
        break;
      case '%':
        result = (this.firstOperand % parseFloat(this.display)).toString();
        break;
    }

    if (result.toString().includes('Infinity')) {
      result = 'Cannot divide by 0';
    }
    if (result.toString().includes('NaN')) {
      result = 'Invalid Evalution';
    }

    if (result.toString().includes('.')) result = parseFloat(result).toFixed(2);
    if (op === '=') {
      this.display = result;
      this.label = '';
    } else {
      this.label = result;
    }
    this.operator = '';

    this.equalEmitter.emit({
      display: this.display,
      label: this.label,
      operator: this.operator,
      firstOperand: this.firstOperand,
      equalPressed: this.equalPressed,
    });
  }
}
