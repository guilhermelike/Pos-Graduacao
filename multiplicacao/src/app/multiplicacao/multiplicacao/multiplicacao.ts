import { Component } from '@angular/core';
import { MultiplicacaoService } from '../services';

@Component({
  selector: 'app-multiplicacao',
  standalone: false,
  templateUrl: './multiplicacao.html',
  styleUrl: './multiplicacao.css'
})
export class Multiplicacao {
  private res : number = 0;
  constructor(private multiplicacaoService: MultiplicacaoService) { }

  
  multiplicarBotao(numero1: string, numero2: string): void {
    let n1: number = parseFloat(numero1);
    let n2: number = parseFloat(numero2);
    this.res = this.multiplicacaoService.multiplicar(n1, n2);
  }

  get resultado(): string {
    return this.res.toString();
  }
}
