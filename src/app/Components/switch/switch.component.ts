import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-switch',
  templateUrl: './switch.component.html',
  styleUrls: ['./switch.component.css'],
})
export class SwitchComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
  toogleMode() {
    document.getElementsByClassName('dark')[0].classList.toggle('darkAnimate');
    document.getElementsByClassName('fas')[0].classList.toggle('fasDark');
  }
}
