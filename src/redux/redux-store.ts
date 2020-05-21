import {createStore, combineReducers,
  applyMiddleware, compose} from 'redux';
import {mainReducer} from './main-reducer';
//  import {firebaseReducer} from './firebase-reducer';
import {chatReducer} from './chat-reducer';
import thunkMiddleware from 'redux-thunk';
import {reducer as formReducer} from 'redux-form';


let rootReducer = combineReducers({
  mainApp: mainReducer,
  form: formReducer,
  chat: chatReducer,
//  firebase: firebaseReducer,
});


type rootReducerType = typeof rootReducer
export type AppStateType = ReturnType<rootReducerType> // специальная функция достает тип из ...


export type InferActionsTypes<T> = T extends { [key: string]: (...args: any[]) => infer U} ? U : never


// @ts-ignore
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(rootReducer, composeEnhancers(applyMiddleware(thunkMiddleware)));
// @ts-ignore
window.__store__ = store;
// ts-ignore - игнорирует правила ts следующей строчки

export default store;

