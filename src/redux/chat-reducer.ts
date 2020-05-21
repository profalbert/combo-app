import { ResultStandartCodes } from './../api/api';
import { ThunkType, PersonType, MessageFullPersonType } from './../types/types';
import { InferActionsTypes } from './redux-store';
import {chatAPI} from '../api/api';


let initialState = {
  person: {
    id: null,
    firstName: '',
    lastName: '',
    colorIcon: [],
    room: null,
    autorizatedId: null,
  } as PersonType,
  messagesInRoom: [] as Array<MessageFullPersonType>,
  autorizatedPerson: false as boolean,
  isPersonFromLocalStrorage: false as boolean,
  isPersonExitChat: false as boolean,
  isLoadingChat: false as boolean
}

export const chatReducer = (state = initialState, action: ChatActionsTypes): typeof initialState => {
 switch(action.type) {
 	case 'CHAT_INITIALIZED_PERSON': {
    const person = {...action.payload.person}
    let isAutorizatedPerson = (Object.values(person).length === Object.keys(person).length) && (Object.values(person).every(item => item))
	  return {
      ...state,
      person: {
        ...person
      },
      isPersonFromLocalStrorage: true,
      autorizatedPerson: isAutorizatedPerson
	  };
   }
   case 'AUTHORIZATION_PERSON': {
    const payload = {...action.payload.person}
    let color1 = Math.floor(Math.random() * 200 + 1) // не 255, чтобы не было белого цвета
    let color2 = Math.floor(Math.random() * 200 + 1)
    let color3 = Math.floor(Math.random() * 200 + 1) 
	  return {
      ...state,
      person: {
        ...state.person,
        firstName: payload.firstName,
        lastName: payload.lastName,
        colorIcon: [color1, color2, color3],
        room: payload.room,
        autorizatedId: Date.now()
      },
      autorizatedPerson: true
	  };
   }
   case 'REQUEST_ROOM_SUCCESS': {
	  return {
      ...state,
      messagesInRoom: [...action.payload.messagesInRoom],
      isLoadingChat: true
	  };
   }
   case 'SET_DATA_EXIT_CHAT': {
	  return {
      ...state,
      person: {
        ...state.person,
        firstName: '',
        lastName: '',
        colorIcon: [],
        room: null,
        autorizatedId: null
      },
      messagesInRoom: [],
      autorizatedPerson: false,
      isPersonFromLocalStrorage: false,
      isPersonExitChat: true
	  };
   }
	 default: 
	  return state;
 }
}



export type ChatActionsTypes = InferActionsTypes<typeof chatActions>

export const chatActions = {
  chatInitialedPerson: (person: PersonType) => ({
    type: 'CHAT_INITIALIZED_PERSON', payload: {person}
  } as const),
  authorizationPersonSuccess: (person: PersonType) => ({
    type: 'AUTHORIZATION_PERSON', payload: {person}
  } as const),
  requestRoomSuccess: (messagesInRoom: Array<MessageFullPersonType>) => ({
    type: 'REQUEST_ROOM_SUCCESS', payload: {messagesInRoom}
  } as const),
  setDataExitChat: () => ({
    type: 'SET_DATA_EXIT_CHAT', payload: {}
  } as const),
}



export const authorizationPerson = (room: number, firstName: string, lastName: string): ThunkType => async (dispatch, getState) => {
  let personFromState = {...getState().chat.person, ...{room, firstName, lastName}}
  dispatch(chatActions.authorizationPersonSuccess(personFromState));
};


export const requestRoomIfPersonAutorizeted = (room: number): ThunkType => async (dispatch) => {
  const response = await chatAPI.getChatRoom(room)
  if (response.status === ResultStandartCodes.Success) {
    const messagesInRoom = response.data ? [...Object.keys(response.data).map(key => response.data[key])] : []
    dispatch(chatActions.requestRoomSuccess(messagesInRoom));
  }
};


export const postMessageInRoom = (person: PersonType, title: string): ThunkType => async (dispatch) => {
  let options = { month: 'long', day: 'numeric', hour: 'numeric', minute: 'numeric', hour12: false }
  let date = new Date().toLocaleString('en-US', options).split(', ').reverse().join(', ')
  let newPersonMessage = {...person, message: title, date: date, messageId: Date.now()}
  await chatAPI.postChatRoom(newPersonMessage)
};





