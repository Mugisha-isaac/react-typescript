import { ActionType } from "../action-types"
import { Dispatch } from "redux"

export const depositMoney = (amount:DoubleRange) =>{
    return (dispatch:Dispatch)=>{
        dispatch({
            type: ActionType.DEPOSIT,
            payload: amount
        })
    }
}