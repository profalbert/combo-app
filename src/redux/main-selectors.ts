import { AppStateType } from './redux-store';
import {createSelector} from "reselect";


const getUsers = (state: AppStateType) => {
  return state.mainApp.messagesData;
}
const getUsersSelector = (state: AppStateType) => {
  return getUsers(state);
}
export const getUsersSuperSelector = 
  createSelector(getUsersSelector, (users) => {
    return users.filter(() => true);
  }); // используем библиотеку reselect, для избежания ошибок

  
export const getPersons = (state: AppStateType) => {
  return state.mainApp.users;
}
export const getPostMessages = (state: AppStateType) => {
  return state.mainApp.postMessages;
}



