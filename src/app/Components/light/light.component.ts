import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-light',
  templateUrl: './light.component.html',
  styleUrls: ['./light.component.css'],
})
export class LightComponent implements OnInit {
  @Input() display = '0';
  @Input() label = '0';
  @Input() operator = '';
  @Input() var1 = 0;
  @Input() equalPressed = false;

  @Output() lightEmitter = new EventEmitter<any[]>();

  constructor() {}

  ngOnInit(): void {}

  update(e: any) {
    console.log(e);
    this.lightEmitter.emit([e[0], e[1], e[2], e[3], e[4]]);
  }
}
