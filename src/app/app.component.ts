import { Component, ViewChild } from '@angular/core';
import { EqualData } from './Components/equal/equal.component';
import { LightComponent } from './Components/light/light.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  @ViewChild(LightComponent)
  private lightComponent!: LightComponent;

  title = 'Angular-Calci';

  display = '0';
  label = '';
  operator = '';
  firstOperand = 0;
  equalPressed = false;
  // .................  Function to handle digit click  ..............
  digitClicked(digit: string) {
    if (
      this.display === 'Cannot divide by 0' ||
      this.display === 'Invalid Evalution'
    )
      this.clearScreen();
    if (this.display === '0') {
      this.display = '';
    }
    if (this.equalPressed) {
      if (digit !== '.') {
        this.display = '';
      }
      this.equalPressed = false;
    }
    if (digit === '.' && this.display.includes('.')) return;
    if (digit === '.' && this.display === '') {
      this.display = '0';
    }

    this.display = this.display + digit;
  }
  // .................  Function to handle operator click  ..............
  operatorClicked(op: string) {
    if (
      this.display === 'Cannot divide by 0' ||
      this.display === 'Invalid Evalution'
    )
      return;

    this.firstOperand = parseFloat(this.display);
    this.operator = op;

    if (this.display.endsWith('.')) {
      this.display = this.display.substr(0, this.display.length - 1);
    }

    if (this.label === '') {
      this.label = this.display + ' ' + op;
      this.display = '0';
    } else if (this.display === '0') {
      this.label = this.label.substr(0, this.label.length - 1) + op;
    } else {
      this.operator = this.label.substr(this.label.length - 1);

      this.firstOperand = parseFloat(
        this.label.substr(0, this.label.length - 2)
      );

      this.lightComponent.callEqual('op', this.firstOperand);
      this.operator = op;
      this.label += ' ' + op;
      this.display = '0';
    }
  }
  // .................  Function to change sign  .....................
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
  // ................  Function to handle equal clicked  ...............
  equalClicked(e: EqualData) {
    this.display = e.display;
    this.label = e.label;
    this.operator = e.operator;
    this.firstOperand = e.firstOperand;
    this.equalPressed = e.equalPressed;
  }
}
