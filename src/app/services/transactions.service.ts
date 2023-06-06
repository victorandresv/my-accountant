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

    if(localStorage.getItem('moneyInputs') != null){
      let data:any = localStorage.getItem('moneyInputs');
      this.inputsMoney = JSON.parse(data);
    }
    console.log(this.inputsMoney);

    if(this.inputsMoney.length == 0){
      this.inputsMoney.push({
        type: 'in',
        currency: 'brl',
        items: [],
      });
    }
  }

  public AddTransaction(name:string, quantity: number){
    this.inputsMoney[0].items.push({
      description: name,
      quantity: quantity,
      date: new Date().getSeconds().toString(),
    });

    localStorage.setItem('moneyInputs', JSON.stringify(this.inputsMoney));

  }
}
