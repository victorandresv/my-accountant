import { InputMoney } from "./input-money";

export interface BlockMoney {
    type:string;
    currency:string;
    items: InputMoney[]
}
