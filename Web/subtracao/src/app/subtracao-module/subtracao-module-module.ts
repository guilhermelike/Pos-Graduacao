import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Subtracao } from './subtracao';
import { SubtracaoService } from './services';



@NgModule({
  declarations: [
    Subtracao
  ],
  imports: [
    CommonModule
  ],
  exports: [
    Subtracao
  ],
  providers: [
    SubtracaoService
  ]
})
export class SubtracaoModuleModule { 

  constructor(private subtracaoService: SubtracaoService) {}

}
