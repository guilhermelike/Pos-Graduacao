import { Component } from '@angular/core';
import { DivisaoService } from '../services';

@Component({
  selector: 'app-divisao',
  standalone: false,
  templateUrl: './divisao.html',
  styleUrl: './divisao.css'
})
export class Divisao {
  private res : number = 0; 

  constructor(private divisaoService: DivisaoService) { }

  dividirBotao(numero1: string, numero2: string): void {
    let n1: number = parseFloat(numero1);
    let n2: number = parseFloat(numero2);
    this.res = this.divisaoService.dividir(n1, n2);
  }

  get resultado(): string {
    return this.res.toString();
  }

}
