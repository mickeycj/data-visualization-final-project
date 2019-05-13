import { NgModule } from '@angular/core';

import {
  MatGridListModule,
  MatToolbarModule
} from '@angular/material';

@NgModule({
  exports: [
    MatGridListModule,
    MatToolbarModule
  ]
})
export class MaterialModule { }
