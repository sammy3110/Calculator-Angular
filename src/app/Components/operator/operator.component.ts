import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-operator',
  templateUrl: './operator.component.html',
  styleUrls: ['./operator.component.css'],
})
export class OperatorComponent implements OnInit {
  @Input() operatorButton = '';
  @Input() type = '';

  @Input() display = '0';
  @Input() operator = '';
  @Input() label = '0';
  @Input() var1 = 0;
  @Input() equalPressed = false;

  @Output() operatorEmitter = new EventEmitter<any[]>();

  constructor() {}

  ngOnInit(): void {}

  // ................. Function to handle operator click  ...........
  operatorClicked() {
    // ................. If sign changed  ...........................
    if (this.operator === '+/-') this.signChanged();
    // ................. If C pressed  ..............................
    else if (this.operator === 'C') this.clearScreen();
    // ................. If other operators pressed  ................
    else {
      this.var1 = parseFloat(this.display);
      if (
        this.display === 'Cannot divide by 0' ||
        this.display === 'Invalid Evalution'
      )
        return;
      if (this.display.endsWith('.')) {
        this.display = this.display.substr(0, this.display.length - 1);
      }

      if (this.label === '') {
        this.label = this.display + ' ' + this.operatorButton;
        this.display = '0';
      } else if (this.display === '0') {
        this.label =
          this.label.substr(0, this.label.length - 1) + this.operatorButton;
      } else {
        this.operator = this.label.substr(this.label.length - 1);
        this.var1 = parseFloat(this.label.substr(0, this.label.length - 2));
        this.equals(this.operatorButton);
        this.label += ' ' + this.operatorButton;
        this.display = '0';
      }
    }
    this.operatorEmitter.emit([
      this.display,
      this.label,
      this.operator,
      this.var1,
      this.equalPressed,
    ]);
  }
  // ................. Function to change sign  .......................
  signChanged() {
    if (
      this.display === '0' ||
      this.display === 'Cannot divide by 0' ||
      this.display === 'Invalid Evalution'
    )
      return;
    if (this.display.startsWith('-')) {
      this.display = this.display.substr(1);
    } else {
      this.display = '-' + this.display;
    }
  }
  // .................  Function to clear screen  .....................
  clearScreen() {
    this.display = '0';
    this.label = '';
    this.operator = '';
  }

  equals(op: string) {
    if (this.label === '') return;
    let result = '';
    if (op === '=') {
      this.var1 = parseFloat(this.label.substr(0, this.label.length - 2));
      this.equalPressed = true;
    }
    switch (this.operator) {
      case '+':
        result = (this.var1 + parseFloat(this.display)).toString();
        break;
      case 'X':
        result = (this.var1 * parseFloat(this.display)).toString();
        break;
      case '-':
        result = (this.var1 - parseFloat(this.display)).toString();
        break;
      case '/':
        result = (this.var1 / parseFloat(this.display)).toString();
        break;
      case '%':
        result = (this.var1 % parseFloat(this.display)).toString();
        break;
    }
    if (result.toString().includes('Infinity')) {
      result = 'Cannot divide by 0';
    }
    if (result.toString().includes('NaN')) {
      result = 'Invalid Evalution';
    }

    console.log(result);
    if (result.toString().includes('.')) result = parseFloat(result).toFixed(2);
    if (op == '=') {
      this.display = result;

      this.label = '';
    } else {
      this.label = result;
    }
    this.operator = '';
  }
}
