import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Soma } from './somaComponent';
import { SomaService } from './services';



@NgModule({
  declarations: [
    Soma
  ],
  imports: [
    CommonModule
  ],
  exports: [
    Soma
  ],
  providers: [
    SomaService
  ]
})
export class SomaModule { }
