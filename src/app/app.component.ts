import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'Angular-Calci';

  display = '0';
  label = '';
  operator = '';
  var1 = 0;
  equalPressed = false;

  updateData(e: any) {
    this.display = e[0];
    this.label = e[1];
    this.operator = e[2];
    this.var1 = e[3];
    this.equalPressed = e[4];
  }
}
