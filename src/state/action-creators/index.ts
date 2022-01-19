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

export const withdrawMoney = (amount:DoubleRange)=>{
    return(dispatch:Dispatch)=>{
        dispatch({
            type:ActionType.WITHDRAW,
            payload:amount
        })
    }
}


export const bankruptFunc = ()=>{
    return(dispatch:Dispatch)=>{
        dispatch({
            type:ActionType.BANKRUPT
        })
    }
}