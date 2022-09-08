import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { CsdemoTemperatureModule } from '@ionic-enterprise/cs-demo-weather-widgets-angular'

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    CsdemoTemperatureModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
