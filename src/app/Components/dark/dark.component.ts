import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-dark',
  templateUrl: './dark.component.html',
  styleUrls: ['./dark.component.css'],
})
export class DarkComponent implements OnInit {
  @Input() display = '0';
  @Input() label = '0';
  @Input() operator = '';
  @Input() var1 = 0;
  @Input() equalPressed = false;

  @Output() darkEmitter = new EventEmitter<any[]>();

  constructor() {}

  ngOnInit(): void {}

  update(e: any) {
    console.log(e);
    this.darkEmitter.emit([e[0], e[1], e[2], e[3], e[4]]);
  }
}
