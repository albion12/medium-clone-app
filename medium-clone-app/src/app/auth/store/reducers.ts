import { Action, createReducer, on } from "@ngrx/store";
import { AuthStateInterface } from "../types/authState.interface";
import { registerAction } from "./actions/register.action";

const intitialState: AuthStateInterface = {
    isSubmitting:false
}

const authReducer = createReducer(intitialState,on(registerAction,(state):AuthStateInterface =>({
    ...state,
    isSubmitting:true
})))


export function reducers(state:AuthStateInterface,action:Action){
    return authReducer(state,action)
}