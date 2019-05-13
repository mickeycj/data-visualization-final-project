import { NgModule } from '@angular/core';

import {
  MatToolbarModule,
  MatGridListModule,
  MatButtonToggleModule
} from '@angular/material';

@NgModule({
  exports: [
    MatToolbarModule,
    MatGridListModule,
    MatButtonToggleModule
  ]
})
export class MaterialModule { }
