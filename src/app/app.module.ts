import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';

import { MaterialModule } from './material.module';

import { NgApexchartsModule } from 'ng-apexcharts';
import { GoogleChartsModule } from 'angular-google-charts';

import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { DescriptionComponent } from './components/description/description.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    DescriptionComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MaterialModule,
    NgApexchartsModule,
    GoogleChartsModule.forRoot('AIzaSyD-9tSrke72PouQMnMX-a7eZSW0jkFMBWY')
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
