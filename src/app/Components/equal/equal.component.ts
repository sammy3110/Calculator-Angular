import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-equal',
  templateUrl: './equal.component.html',
  styleUrls: ['./equal.component.css'],
})
export class EqualComponent implements OnInit {
  @Input() label = '';
  @Input() var1 = 0;
  @Input() equalPressed = false;
  @Input() operator = '';
  @Input() display = '';

  @Output() equalEmitter = new EventEmitter<any[]>();

  constructor() {}

  ngOnInit(): void {}

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
    this.equalEmitter.emit([
      this.display,
      this.label,
      this.operator,
      this.var1,
      this.equalPressed,
    ]);
  }
}
