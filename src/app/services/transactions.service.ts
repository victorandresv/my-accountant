import { Injectable } from '@angular/core';
import { BlockMoney } from '../interfaces/block-money';

@Injectable({
  providedIn: 'root'
})
export class TransactionsService {

  public inputsMoney: BlockMoney[];
  public outputsMoney: BlockMoney[];

  constructor() {
    this.inputsMoney = [];
    this.outputsMoney = [];

    if (localStorage.getItem('moneyInputs') != null) {
      let data: any = localStorage.getItem('moneyInputs');
      this.inputsMoney = JSON.parse(data);
    }

    if (this.inputsMoney.length == 0) {
      this.inputsMoney.push({
        type: 'in',
        currency: 'brl',
        items: [],
      });
    }
  }

  public SumInputs() {
    const i = 0;
    let sum = 0;
    try {
      for (let n = 0; n < this.inputsMoney[i].items.length; n++) {
        sum += this.inputsMoney[i].items[n].quantity;
      }
    } catch (e) { }
    return sum;
  }

  public SumOutputs() {
    const i = 0;
    let sum = 0;
    try {
      for (let n = 0; n < this.outputsMoney[i].items.length; n++) {
        sum += this.outputsMoney[i].items[n].quantity;
      }
    } catch (e) { }
    return sum;
  }

  public AddTransaction(name: string, quantity: number) {
    this.inputsMoney[0].items.push({
      description: name,
      quantity: quantity,
      date: new Date().getTime().toString(),
    });

    localStorage.setItem('moneyInputs', JSON.stringify(this.inputsMoney));
  }

  public RemoveTransaction(name: string, quantity: number) {
    this.outputsMoney[0].items.push({
      description: name,
      quantity: quantity,
      date: new Date().getTime().toString(),
    });

    localStorage.setItem('moneyOutputs', JSON.stringify(this.outputsMoney));
  }


}
