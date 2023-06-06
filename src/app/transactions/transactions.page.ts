import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-transactions',
  templateUrl: './transactions.page.html',
  styleUrls: ['./transactions.page.scss'],
})
export class TransactionsPage implements OnInit {

  pageTitle: string;

  constructor() { 
    this.pageTitle = "Transacciones";
  }

  public actionSheetButtons = [
    {
      text: 'Entrada de dinero',
      role: 'destructive',
      data: {
        action: 'delete',
      },
    },
    {
      text: 'Salida de dinero',
      data: {
        action: 'share',
      },
    },
    {
      text: 'Cancelar',
      role: 'cancel',
      data: {
        action: 'cancel',
      },
    },
  ];

  ngOnInit() {
  }

}
