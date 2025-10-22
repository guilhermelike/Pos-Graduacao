import { Component } from '@angular/core';
import { SomaService } from '../services';

@Component({
  selector: 'app-soma',
  standalone: false,
  templateUrl: './soma.html',
  styleUrl: './soma.css'
})
export class Soma {
  private res: number = 0;
  
  constructor(private somaService: SomaService) {}

  get resultado(): string{
    return this.res.toString();
  }

  somarBotao(numero1: string, numero2: string): void {
    let n1: number;
    let n2: number;

    n1 = parseFloat(numero1);
    n2 = parseFloat(numero2);
    this.res = this.somaService.somar(n1, n2);
  }

}
