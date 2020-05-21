import io from 'socket.io-client';

// https://react-todolist-10bf5.firebaseio.com/chat/room1.json
const socket = io('http://localhost:9999');


// @ts-ignore
window.socket = socket; // глобально устанавливаем сокет


export default socket;


