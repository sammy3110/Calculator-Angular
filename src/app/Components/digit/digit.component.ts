import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-digit',
  templateUrl: './digit.component.html',
  styleUrls: ['./digit.component.css'],
})
export class DigitComponent implements OnInit {
  @Input() type = '';
  @Input() digit = '';

  @Input() display = '0';
  @Input() label = '0';
  @Input() operator = '';
  @Input() var1 = 0;
  @Input() equalPressed = false;

  @Output() digitEmitter = new EventEmitter<any[]>();

  constructor() {}

  ngOnInit(): void {}

  buttonClicked() {
    if (
      this.display === 'Cannot divide by 0' ||
      this.display === 'Invalid Evalution'
    )
      this.display = '0';
    if (this.display === '0') {
      // this.clearScreen();
      this.display = '';
    }
    if (this.equalPressed) {
      if (this.digit !== '.') {
        this.display = '';
      }
      this.equalPressed = false;
    }
    if (this.digit === '.' && this.display.includes('.')) return;
    if (this.digit === '.' && this.display === '') {
      this.display = '0';
    }

    this.display = this.display + this.digit;
    this.digitEmitter.emit([
      this.display,
      this.label,
      this.operator,
      this.var1,
      this.equalPressed,
    ]);
  }
}
