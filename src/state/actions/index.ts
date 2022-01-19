import { ActionType } from "../action-types";

ActionType

interface DepositAction{
    type:ActionType.DEPOSIT,
    payload: number

}

interface withdrawAction{
    type:ActionType.WITHDRAW,
    payload:number
}

interface BankruptAction{
    type:ActionType.BANKRUPT
}


export type Action = DepositAction | withdrawAction | BankruptAction;