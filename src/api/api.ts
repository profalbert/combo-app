import { UserType, TodoType, MessageFullPersonType, CoinType } from './../types/types';
import axios from 'axios';
// import openSocket from 'socket.io-client';


const urlFirebase = 'https://react-todolist-10bf5.firebaseio.com';

let instance = axios.create({
  baseURL: 'https://social-network.samuraijs.com/api/1.0/',
  withCredentials: true,
  headers: {
    'API-KEY': `c8ea854d-e495-4696-9913-9b1e4acda573`
  }
});



export enum ResultStandartCodes {
  Success = 0 | 200,
}


type UsersApiTypes = {
  getUsers: {
		items: Array<UserType>
		totalCount: number
  }
}
export const usersAPI = {
  async getUsers (currentPage = 1, pageSize = 10) {
    return instance.get<UsersApiTypes["getUsers"]>(`users?page=${currentPage}&count=${pageSize}`)
  }
}


type coinsAPITypes = {
  getCoins: {
		data: Array<CoinType>
		success: boolean
  }
}
export const coinsAPI = {
  async getCoins () {
    return axios.get<coinsAPITypes["getCoins"]>(`https://www.binance.com/exchange-api/v1/public/asset-service/product/get-products`, {withCredentials: true}).then(res => res.data)
  }
}


type firebaseAPITypes = {
  getNotes: Array<TodoType>
  postNotes: {}
}
export const firebaseAPI = {
  async getNotes () {
    return (
      axios.get<firebaseAPITypes["getNotes"]>(`${urlFirebase}/notes.json`)
    )
  },
  async postNotes (notes: Array<TodoType>) {
    return (
      axios.put<firebaseAPITypes["postNotes"]>(`${urlFirebase}/notes.json`, notes)
    )
  }
}


type chatAPITypes = {
  getChatRoom: {
    [key: string]: MessageFullPersonType
  }
  postChatRoom: {}
}
export const chatAPI = {
  async getChatRoom (room: number) {
    return (
      axios.get<chatAPITypes["getChatRoom"]>(`${urlFirebase}/chat/room${room}.json`, {headers: {"Access-Control-Allow-Origin": urlFirebase}})
    )
  },
  async postChatRoom (person: MessageFullPersonType) {    
    return (
      axios.post<chatAPITypes["postChatRoom"]>(`${urlFirebase}/chat/room${person.room}.json`, person, {headers: {"Access-Control-Allow-Origin": urlFirebase}})
    )
  }
}


// const socket = openSocket('http://localhost:8000');
// export const subscribeToTimer = (cb: any) => {
//   socket.on('timer', (timestamp: any) => cb(null, timestamp));
//   socket.emit('subscribeToTimer', 1000);
// }