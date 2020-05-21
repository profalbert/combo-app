import React, {useState, useEffect, ChangeEvent} from 'react';
import {connect} from 'react-redux';
import Button from '@material-ui/core/Button'
import SendIcon from '@material-ui/icons/Send';
import { createStyles, makeStyles, Theme, withStyles } from '@material-ui/core/styles';
import {teal, orange} from '@material-ui/core/colors';
import TextField from '@material-ui/core/TextField';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import Select from '@material-ui/core/Select';
// import socket from '../socket/socket';
import {authorizationPerson, postMessageInRoom, requestRoomIfPersonAutorizeted,
 chatActions} from '../redux/chat-reducer';
import {chatValidatorForm, validateString} from '../validators/validators';
import {mainActions} from '../redux/main-reducer';
import { AppStateType } from '../redux/redux-store';
import { PersonType, MessageFullPersonType } from '../types/types';
import Preloader from './Preloader';


const CssTextField = withStyles({
  root: {
    '& label.Mui-focused': {
      color: teal[400],
    },
    '& textarea': {
      height: 'auto',
    },
    '& input': {
      height: 'auto',
    },
    '& .MuiInput-underline:after': {
      borderBottomColor: teal[400],
    },
    '& .MuiOutlinedInput-root': {
      '& fieldset': {
        transition: 'all 0.3s',
      },
      '&:hover fieldset': {
        borderColor: 'black',
        transition: 'all 0.3s',
      },
      '&.Mui-focused fieldset': {
        borderColor: teal[400],
      },
    },
  },
})(TextField);

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    button: {
      margin: `0px 0px 0px ${theme.spacing(1)}px`,
      height: '100%',
      backgroundColor: orange[700],
      color: '#fff', 
      '&:hover': {
        backgroundColor: orange[500],
      },
    },   
    loginButton: {
      height: '50px',
      backgroundColor: orange[700],
      color: '#fff', 
      marginTop: '10px',
      '&:hover': {
        backgroundColor: orange[500],
      },
    },  
    loginInput: {
      margin: '10px 0px'
    },
    loginSelect: {
      "& .MuiSelect-select:focus": {
        backgroundColor: 'transparent',
      },
      "&::after": {
        borderBottom: `2px solid ${teal[400]}`,
      },
    },
    loguotButton: {
      height: '30px',
      margin: '0px',
      fontSize: '12px',
      position: 'absolute',
      padding: '5px 10px',
      right: '10px',
    }
  }),
);


type MapStatePropsType = {
  person: PersonType
  messagesInRoom: Array<MessageFullPersonType>
  autorizatedPerson: boolean
  isPersonFromLocalStrorage: boolean
  isPersonExitChat: boolean
  isLoadingChat: boolean
}
type MapDispatchPropsType = {
  setDataModalWindow: (isOpen: boolean, title?: string | null | undefined) => void
  chatInitialedPerson: (person: PersonType) => void
  setDataExitChat: () => void
  authorizationPerson: (room: number, firstName: string, lastName: string) => void
  postMessageInRoom: (person: PersonType, title: string) => void
  requestRoomIfPersonAutorizeted: (room: number) => void
}
type OwnPropsType = {}
type PropsType = MapStatePropsType & MapDispatchPropsType & OwnPropsType


const TestBinanceContainer: React.FC<PropsType> = ({person, chatInitialedPerson, authorizationPerson, messagesInRoom, requestRoomIfPersonAutorizeted,
  postMessageInRoom, autorizatedPerson, setDataModalWindow, isPersonFromLocalStrorage, setDataExitChat, isPersonExitChat, isLoadingChat}) => {
    
  const classes = useStyles();
  const [title, setTitle] = useState<string>('')
  const ScrollChatBlock = React.createRef<HTMLDivElement>()
  const [countScrollChatBar, setcountScrollChatBar] = useState<number>(0)
  const [redraw, setRedraw] = useState<boolean>(false)


  useEffect(() => {
    let savedPerson = JSON.parse(localStorage.getItem('person') || '{}')
    if (!savedPerson.id) {
      const id = Date.now();
      chatInitialedPerson({...savedPerson, id: id})
    } else {
      chatInitialedPerson({...savedPerson})
    }
  }, [chatInitialedPerson])

  useEffect(() => {
    if (isPersonFromLocalStrorage || isPersonExitChat) {
      localStorage.setItem('person', JSON.stringify(person))
    }
  }, [person, isPersonFromLocalStrorage, isPersonExitChat])

  useEffect(() => {
    if (autorizatedPerson && person.room && !redraw) { // делаем постоянную перерисовку (каждую 1 секунду, см. ниже setTimeout)
      requestRoomIfPersonAutorizeted(person.room)
      console.log('Redraw chat')
      setRedraw(true)
      setTimeout(() => {
        setRedraw(false)
      }, 1000)
    }
  }, [autorizatedPerson, redraw, person.room, requestRoomIfPersonAutorizeted])

  useEffect(() => {
    if (ScrollChatBlock.current && (countScrollChatBar === 0)) {
      ScrollChatBlock.current.scrollTop = ScrollChatBlock.current.scrollHeight
      setcountScrollChatBar(prev => prev + 1)
    }
    if (ScrollChatBlock.current) {
      if (ScrollChatBlock.current.scrollTop + ScrollChatBlock.current.clientHeight + 90 > ScrollChatBlock.current.scrollHeight) { // если больше 90 прокрученно вверх, то отматывать в конец не будет
        ScrollChatBlock.current.scrollTop = ScrollChatBlock.current.scrollHeight
      }
    }
  }, [ScrollChatBlock, countScrollChatBar])
  

  const changeMessage = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTitle(e.target.value)
  }

  const sendMessage = () => {
    let isValidate = validateString(title, 1000)
    if (isValidate) {
      postMessageInRoom(person, title)
      // socket.emit('sendMessage', {...person, title}) // работаем с сокетами
    } else {
      setDataModalWindow(true, "Enter your message correctly: use not only spaces, a limit of 1000 characters, and any word should not exceed 30 characters.");
    }
    setTitle('')
  }

  const sendPerson = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    let room = e.currentTarget.numberRoom.value
    let firstName = e.currentTarget.firstName.value
    let lastName = e.currentTarget.lastName.value
    let isValidate = chatValidatorForm(room, firstName, lastName)
    if (isValidate) {
      authorizationPerson(room, firstName, lastName)
    } else {
      setDataModalWindow(true, "Please fill out the form correctly! Fields without spaces and a maximum of 15 characters each and select the room you need.");
    }
  }

  const exitChat = () => {
    setDataExitChat();
    setTitle('')
    if (countScrollChatBar !== 0) setcountScrollChatBar(0)
  }
  

  return (
    <div className="chatContainer">
      <h1 className="chatH1">Chat</h1>
      <div className={'chatWrap'}>

      {!autorizatedPerson 
        ? <div className={"loginWrap"}>
            <div className={"loginTitle"}>Login</div>
            <form onSubmit={(e) => sendPerson(e)} className={"loginForm"} noValidate autoComplete="off">
              <InputLabel id="demo-simple-select-label">Choose a room</InputLabel>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                className={classes.loginSelect}
                name={'numberRoom'}
                defaultValue={1}
              >
                <MenuItem value={1}>Room 1</MenuItem>
                <MenuItem value={2}>Room 2</MenuItem>
                <MenuItem value={3}>Room 3</MenuItem>
                <MenuItem value={4}>Room 4</MenuItem>
                <MenuItem value={5}>Room 5</MenuItem>
              </Select>
              <CssTextField name={'firstName'} className={classes.loginInput} label="Enter your name" />
              <CssTextField name={'lastName'} className={classes.loginInput} label="Enter last name" /> 
              <Button type={"submit"} variant="contained" color="primary" className={classes.loginButton}>Submit</Button>        
            </form>
          </div>
        : null}


        {autorizatedPerson 
        ? isLoadingChat
          ? <div className={'chatBlock'}>
              <div className="chatTitle">
                <span>Room {person.room}</span>
                <Button
                  variant="contained"
                  color="primary"
                  className={`${classes.loguotButton} ${classes.button}`}
                  onClick={() => exitChat()}
                >
                  Exit chat
                </Button></div> 

              <div ref={ScrollChatBlock} className="chatText">
                {messagesInRoom.length
                  ? messagesInRoom.map(item => (
                    <div key={item.messageId} className="chatPerson">
                      <div className={`chatPersonImg ${person.autorizatedId === item.autorizatedId ? 'chatPersonImgMe' : ''}`} style={{backgroundColor: person.autorizatedId === item.autorizatedId 
                                                                                                                                                          ? '#00c853' 
                                                                                                                                                          : `rgb(${item.colorIcon[0]},
                                                                                                                                                            ${item.colorIcon[1]},
                                                                                                                                                            ${item.colorIcon[2]})`}}>
                        {person.id === item.id 
                          ? person.autorizatedId === item.autorizatedId
                              ? <span>You <br/> (now)</span>
                              : <span>You <br/> (before)</span>
                          : <span style={{fontSize: '20px'}}>
                              {item ? (
                                item.firstName ? item.firstName.slice(0, 1).toUpperCase() : ''
                              ) : ''}
                              {item ?
                                item.lastName ? item.lastName.slice(0, 1).toUpperCase() : ''
                              : ''}
                            </span>
                        }
                      </div>
                      <div className="chatPersonBlock">
                        <div className="chatPersonName">
                          <span>{`${item.firstName} ${item.lastName}`}</span>
                          <span className="chatPersonNameData">{`${item.date}`}</span>
                        </div>
                        <div className={`chatPersonMessage ${person.autorizatedId === item.autorizatedId ? 'chatPersonMessageMe' : ''}`}><span>{`${item.message}`}</span></div>
                      </div>              
                    </div>              
                  ))
                  : <div className="chatPerson">
                      <div className="chatPersonImg"></div>
                      <div className="chatPersonBlock">
                        <div className="chatPersonName">
                          <span>Bot</span>
                          <span className="chatPersonNameData"></span>
                        </div>
                        <div className="chatPersonMessage">Hello! There are no messages in this chat yet</div>
                      </div>              
                    </div> 
                }   
              </div>       

              <div className="chatSend">
                <CssTextField
                  onChange={changeMessage} 
                  rowsMax={5}
                  multiline
                  value={title}
                  label="Enter case name"
                  id="outlined-basic" variant="outlined"
                />
                <Button
                  variant="contained"
                  color="primary"
                  className={classes.button}
                  endIcon={<SendIcon></SendIcon>}
                  onClick={() => sendMessage()}
                >
                  Send
                </Button>
              </div> 
            </div>
          : <div className={'secondPreloader'}><Preloader /></div>
        : null}

      </div>
    </div>
  );
}



let mapStateToProps = (state: AppStateType): MapStatePropsType => {
  return {
    person: state.chat.person,
    messagesInRoom: state.chat.messagesInRoom,
    autorizatedPerson: state.chat.autorizatedPerson,
    isPersonFromLocalStrorage: state.chat.isPersonFromLocalStrorage,
    isPersonExitChat: state.chat.isPersonExitChat,
    isLoadingChat: state.chat.isLoadingChat
  }
}
let mapDispatchToProps: MapDispatchPropsType = {
  setDataModalWindow: mainActions.setDataModalWindow,
  chatInitialedPerson: chatActions.chatInitialedPerson,
  setDataExitChat: chatActions.setDataExitChat,
  authorizationPerson,
  postMessageInRoom,
  requestRoomIfPersonAutorizeted,
}


const TestBinance = connect<MapStatePropsType, MapDispatchPropsType, OwnPropsType, AppStateType>(mapStateToProps, mapDispatchToProps)(TestBinanceContainer)

export default TestBinance;