import { TypedUseSelectorHook, useSelector } from 'react-redux'
import { Action } from 'redux'
import { ThunkAction } from 'redux-thunk'
import { StateType } from './redux/store'

export type InferActionTypes<T> = T extends { [key: string]: (...args: any[]) => infer U } ? U : never
export type BaseThunkType<A extends Action, R = Promise<void>> = ThunkAction<R, StateType, unknown, A>
export const useTypedSelector: TypedUseSelectorHook<StateType> = useSelector




export type ActionType = {
    type: string
    payload?: any
  }