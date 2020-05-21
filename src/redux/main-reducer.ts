import { ResultStandartCodes } from './../api/api';
import { ThunkType, UserType, CoinType, DataForModalWindowType } from './../types/types';
import { InferActionsTypes } from './redux-store';
import {usersAPI} from '../api/api';
import {coinsAPI} from '../api/api';


let initialState =  {
	messagesData: [
    {id: 1, message: 'Hi'},
    {id: 2, message: 'How are you doing?'}, 
    {id: 3, message: 'GG'}, 
    {id: 4, message: 'GG'}, 
    {id: 5, message: 'GG'}, 
    {id: 6, message: 'GG'}
   ] as Array<{id: number, message: string}>,
   users: [] as Array<UserType>,
   postMessages: [] as Array<{id: number, title: string}>,
   initialized: false as boolean,
   followingInProgress: [] as Array<number>,
   propsIsEditTodo: true as boolean,
   dataForModalWindow: {
     isOpen: false,
     title: 'Unknown error'
   } as DataForModalWindowType,
   coins: [] as Array<CoinType>,
}


export const mainReducer = (state = initialState, action: MainActionsTypes): typeof initialState => {
 switch(action.type) {
 	case 'ADD_POST': {
    const body = {...action.payload}
	  return {
      ...state,
      messagesData: [...state.messagesData, {id: state.messagesData.length + 1, message: body.value}]
	  };
   }
 	case 'SET_USERS': {
    const data = {...action.payload}
	  return {
      ...state,
      users: [...data.items]
	  };
   }
   case 'POST_MESSAGES': {
    const data = {...action.payload}
	  return {
      ...state,
      postMessages: [...state.postMessages, {id: state.postMessages.length + 1, title: data.value}]
	  };
   }
   case 'INITIALIZED_SUCCESS': {
    const value = {...action.payload}
	  return {
      ...state,
      initialized: value.isInitialized
	  };
   }
   case 'TOGGLE_IS_FOLLOWING_PROGRESS': {
	  return {
	  	...state,
			followingInProgress: action.isFollowingInProgress 
			? [...state.followingInProgress, action.userId] 
			: [...state.followingInProgress.filter(id => id !== action.userId)]
	  };
   }
   case 'SET_PROPS_IS_EDIT_TODO': {
    const value = {...action.payload}
	  return {
      ...state,
      propsIsEditTodo: value.isEditTodo
	  };
   }
   case 'SET_DATA_MODAL_WINDOW': {
    const value = {...action.payload}
	  return {
      ...state,
      dataForModalWindow: {
        isOpen: value.isOpen,
        title: value.title
      }
	  };
   }
   case 'SET_COINS': {
    const value = {...action.payload}
	  return {
      ...state,
      coins: [...value.data]
	  };
   }
	 default: 
	  return state;
 }
}



export type MainActionsTypes = InferActionsTypes<typeof mainActions>

export const mainActions = {
  addPostCreator: (value: string) => ({
    type: 'ADD_POST', payload: {value}
  } as const),
  setUsers: (items: Array<UserType>) => ({
    type: 'SET_USERS', payload: {items}
  } as const),
  sendMessage: (value: string) => ({
    type: 'POST_MESSAGES', payload: {value}
  } as const),
  toggleFollowingProgress: (isFollowingInProgress: boolean, userId: number) => ({ 
    type: 'TOGGLE_IS_FOLLOWING_PROGRESS', isFollowingInProgress, userId
  } as const),
  setPropsIsEditTodo: (isEditTodo: boolean) => ({
    type: 'SET_PROPS_IS_EDIT_TODO', payload: {isEditTodo}
  } as const),
  setDataModalWindow: (isOpen: boolean, title?: string | null | undefined) => ({
    type: 'SET_DATA_MODAL_WINDOW', payload: {isOpen, title}
  } as const),
  setCoins: (data: Array<CoinType>) => ({
    type: 'SET_COINS', payload: {data}
  } as const),
  initializeAppSuccess: () => ({
    type: 'INITIALIZED_SUCCESS', payload: {isInitialized: true}
  } as const),
}



export const requestUsers = (): ThunkType => async (dispatch) => {  
  try {
    let response = await usersAPI.getUsers();
    if (response.status === ResultStandartCodes.Success) {
      dispatch(mainActions.setUsers(response.data.items));
      throw new Error("Проверка!!!");
    }
	} catch (error) {
		console.log(error);
	}
}


export const requestCoins = (): ThunkType => async (dispatch) => {
  let dataCoins = await coinsAPI.getCoins();
  if (dataCoins.success) {
    let coins = dataCoins.data.filter(item => item.q === 'RUB')
    dispatch(mainActions.setCoins(coins));
  }
}


export const initializeApp = (): ThunkType => async (dispatch) => {
  // делаем инициализцию приложения, для того, чтобы 
  // получить стартовые данные для конкретного пользователя, 
  // ну и вовсе определить, а есть ли конкретный пользователь, или он аноним.
  window.onload = () => {
    let SetPreloader = () => {
      setTimeout(()=>{
        dispatch(mainActions.initializeAppSuccess());
      }, 1000);
    }
    SetPreloader();
  }
  // Promise.reject('to stop server requests: cancel the getCoins() request in coinsAPI') // просто тестирую на ошибку
}





