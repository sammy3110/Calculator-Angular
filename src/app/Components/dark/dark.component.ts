import {
  Component,
  EventEmitter,
  Input,
  OnInit,
  Output,
  ViewChild,
} from '@angular/core';
import { EqualComponent, EqualData } from '../equal/equal.component';

@Component({
  selector: 'app-dark',
  templateUrl: './dark.component.html',
  styleUrls: ['./dark.component.css'],
})
export class DarkComponent implements OnInit {
  @Input() display = '0';
  @Input() label = '0';
  @Input() operator = '';
  @Input() firstOperand = 0;
  @Input() equalPressed = false;

  @Output() darkOpEmitter = new EventEmitter<string>();
  @Output() darkDigitEmitter = new EventEmitter<string>();
  @Output() darkSignEmitter = new EventEmitter<string>();
  @Output() darkClearScreenEmitter = new EventEmitter<string>();
  @Output() darkEqualDataEmitter = new EventEmitter<EqualData>();

  @ViewChild(EqualComponent)
  private equalComp!: EqualComponent;

  constructor() {}

  ngOnInit(): void {}

  digitClicked(e: string) {
    this.darkDigitEmitter.emit(e);
  }

  operatorClicked(e: string) {
    this.darkOpEmitter.emit(e);
  }

  equalClicked(e: EqualData) {
    this.darkEqualDataEmitter.emit(e);
  }
  signChanged(e: string) {
    this.darkSignEmitter.emit(e);
  }
  clearScreen(e: string) {
    this.darkClearScreenEmitter.emit(e);
  }

  callEqual(op: string) {
    this.equalComp.equals(op);
  }
}
