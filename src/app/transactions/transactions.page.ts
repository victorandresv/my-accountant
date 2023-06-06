import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-transactions',
  templateUrl: './transactions.page.html',
  styleUrls: ['./transactions.page.scss'],
})
export class TransactionsPage implements OnInit {

  public pageTitle: string;

  constructor() { 
    this.pageTitle = "Transacciones";
  }

  public alertButtons = ['Aceptar','Cancelar'];

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
  }

}
