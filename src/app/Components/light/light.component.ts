import {
  Component,
  EventEmitter,
  Input,
  OnInit,
  Output,
  ViewChild,
} from '@angular/core';
import { EqualComponent } from '../equal/equal.component';
import { EqualData } from '../equal/equal.component';

@Component({
  selector: 'app-light',
  templateUrl: './light.component.html',
  styleUrls: ['./light.component.css'],
})
export class LightComponent implements OnInit {
  @Input() display = '0';
  @Input() label = '0';
  @Input() operator = '';
  @Input() firstOperand = 0;
  @Input() equalPressed = false;

  @Output() lightOpEmitter = new EventEmitter<string>();
  @Output() lightDigitEmitter = new EventEmitter<string>();
  @Output() lightSignEmitter = new EventEmitter<string>();
  @Output() lightClearScreenEmitter = new EventEmitter<string>();
  @Output() lightEqualDataEmitter = new EventEmitter<EqualData>();

  @ViewChild(EqualComponent)
  private equalComponent!: EqualComponent;

  constructor() {}

  ngOnInit(): void {}

  operatorClicked(e: string) {
    this.lightOpEmitter.emit(e);
  }
  digitClicked(e: string) {
    this.lightDigitEmitter.emit(e);
  }

  equalClicked(e: EqualData) {
    this.lightEqualDataEmitter.emit(e);
  }
  signChanged(e: string) {
    this.lightSignEmitter.emit(e);
  }
  clearScreen(e: string) {
    this.lightClearScreenEmitter.emit(e);
  }

  callEqual(op: string, firstOperand: number) {
    this.equalComponent.assignValues({
      display: this.display,
      label: this.label,
      operator: this.operator,
      firstOperand: firstOperand,
      equalPressed: this.equalPressed,
    });
    this.equalComponent.equals(op);
  }
}
