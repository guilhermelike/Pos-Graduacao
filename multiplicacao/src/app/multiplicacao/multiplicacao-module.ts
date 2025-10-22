import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Multiplicacao } from './multiplicacao/multiplicacao';
import { MultiplicacaoService } from './services';



@NgModule({
  declarations: [
    Multiplicacao
  ],
  imports: [
    CommonModule
  ],
  exports: [
    Multiplicacao
  ],
  providers: [
    MultiplicacaoService
  ]
})
export class MultiplicacaoModule { }
