import { ResultStandartCodes } from './../api/api';
import { ThunkType, TodoType } from './../types/types';
import { InferActionsTypes } from './redux-store';
import {firebaseAPI} from '../api/api';


let initialState =  {
  notes: [] as Array<TodoType>
}

export const firebaseReducer = (state = initialState, action: FirebaseActionsTypes): typeof initialState => {
 switch(action.type) {
 	case 'FIREBASE_SET_NOTES': {
    const payload = {...action.payload}
	  return {
      ...state,
      notes: [...payload.notes]
	  };
   }
	 default: 
	  return state;
 }
}



export type FirebaseActionsTypes = InferActionsTypes<typeof firebaseActions>

export const firebaseActions = {
  firebaseSuccess: (notes: Array<TodoType>) => ({
    type: 'FIREBASE_SET_NOTES', payload: {notes}
  } as const),
}



export const firebaseGetNotes = (): ThunkType => async (dispatch) => {
  const response = await firebaseAPI.getNotes()
  if (response.status === ResultStandartCodes.Success && response.data) {
    const notes = [...response.data]
    dispatch(firebaseActions.firebaseSuccess(notes));
  }
}


export const firebasePostNotes = (notes: Array<TodoType>): ThunkType => async (dispatch) => {
  await firebaseAPI.postNotes(notes)
}




