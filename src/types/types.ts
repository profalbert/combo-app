import { MainActionsTypes } from './../redux/main-reducer';
import { FirebaseActionsTypes } from './../redux/firebase-reducer';
import { ChatActionsTypes } from './../redux/chat-reducer';
import { AppStateType } from './../redux/redux-store';
import { Dispatch } from "react"
import { ThunkAction } from "redux-thunk"
import { FormAction } from 'redux-form';


export type TodoType = {
  title: string,
  id: number,
  completed: boolean
}

export type PhotosType = {
	small: string | null
	large: string | null
}

export type UserType = {
	id: number
	name: string
	status: string
	photos: PhotosType
	followed: boolean
}

export type PersonType = {
  id: number | null
  firstName: string | null
  lastName: string | null
  colorIcon: [number, number, number] | []
  room: number | null
  autorizatedId: number | null
}

export type MessageFullPersonType = {
  id: number | null
  firstName: string | null
  lastName: string | null
  colorIcon: [number, number, number] | []
  room: number | null
  autorizatedId: number | null
  message: string
  messageId: number
  date: string
}

export type CoinType = {
  s: string
  st: string
  b: string
  q: string
  ba: string
  qa: string
  i: number
  ts: number
  an: string
  qn: string
  o: number
  h: number
  l: number
  c: number
  v: number
  qv: number
  y: number
  as: number
  pm: string
  pn: string
  cs: number
  etf: boolean
}

export type AddMessageFormValuesType = {
  newMessageBody: string
}

export type DataForModalWindowType = {
  isOpen: boolean
  title: string | null | undefined
}



export type ActionsTypes = FormAction | ChatActionsTypes | FirebaseActionsTypes | MainActionsTypes

export type GetStateType = () => AppStateType
export type DispatchType = Dispatch<ActionsTypes>
export type ThunkType = ThunkAction<Promise<void>, AppStateType, unknown, ActionsTypes>


