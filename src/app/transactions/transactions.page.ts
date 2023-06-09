import { Component, OnInit } from '@angular/core';
import { TransactionsService } from '../services/transactions.service';

@Component({
  selector: 'app-transactions',
  templateUrl: './transactions.page.html',
  styleUrls: ['./transactions.page.scss'],
})
export class TransactionsPage implements OnInit {

  public pageTitle: string;
  public sumInputs: number = 0;
  public sumOutputs: number = 0;

  constructor(public transactions:TransactionsService) { 
    this.pageTitle = "Transacciones";
  }

  public alertButtons = [{
    text: "Aceptar",
    handler: (data:any) =>{
      if (data[0] != '' && data[1] != ''){
        this.transactions.AddTransaction(data[0], data[1]);
      }
    }
  },'Cancelar'];

  public alertInputs = [
    {
      type: 'text',
      placeholder: 'Descripción',
    },
    {
      type: 'number',
      placeholder: 'Cantidad'
    },
  ];


  ngOnInit() {
    this.sumInputs = this.transactions.SumInputs();
    this.sumOutputs = this.transactions.SumOutputs();
  }

}
