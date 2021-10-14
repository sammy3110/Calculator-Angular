import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { LightComponent } from './Components/light/light.component';
import { DarkComponent } from './Components/dark/dark.component';
import { DigitComponent } from './Components/digit/digit.component';
import { OperatorComponent } from './Components/operator/operator.component';
import { EqualComponent } from './Components/equal/equal.component';
import { DisplayComponent } from './Components/display/display.component';

@NgModule({
  declarations: [
    AppComponent,
    LightComponent,
    DarkComponent,
    DigitComponent,
    OperatorComponent,
    EqualComponent,
    DisplayComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
