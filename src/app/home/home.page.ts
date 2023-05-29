import { Component } from '@angular/core';
import moneyList from '../../assets/money-list-es.json';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  moneyList:any;

  constructor() {
    this.moneyList = moneyList;
  }

  AddWallet(){

  }

}
