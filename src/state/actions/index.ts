import exp from "constants";

interface DepositAction{
    type:'deposit',
    payload: number

}

interface withdrawAction{
    type:'withdraw',
    payload:number
}

interface BankruptAction{
    type:'bankrupt'
}


export type Action = DepositAction | withdrawAction | BankruptAction;