import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Divisao } from './divisao/divisao';
import { DivisaoService } from './services';



@NgModule({
  declarations: [
    Divisao
  ],
  imports: [
    CommonModule,
  ],
  exports: [
    Divisao
  ],
  providers: [
    DivisaoService
  ]
})
export class DivisaoModule { }
