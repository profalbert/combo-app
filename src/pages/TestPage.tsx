import React, {useState, useEffect, ChangeEvent} from 'react';
import {connect} from 'react-redux';
import {compose} from 'redux';
import {mainActions, requestUsers} from '../redux/main-reducer';
import TestPagePure from './TestPagePure';
import {withRouter, RouteComponentProps} from 'react-router-dom';
// import {Redirect} from 'react-router-dom';
import {getUsersSuperSelector,
  getPersons, getPostMessages} from '../redux/main-selectors'; 
import { AppStateType } from '../redux/redux-store';
import { UserType } from '../types/types';


type MapStatePropsType = {
  users: Array<{id: number, message: string}>
  persons: Array<UserType>
  postMessages: Array<{id: number, title: string}>
}
type MapDispatchPropsType = {
  addPostCreator: (value: string) => void
  sendMessage: (value: string) => void
  requestUsers: () => void
}
type OwnPropsType = {}
type PathParamsType = {
	userId: string
}
type PropsType = MapStatePropsType & MapDispatchPropsType & OwnPropsType & RouteComponentProps<PathParamsType>


const TestPageContainer: React.FC<PropsType> = ({requestUsers, addPostCreator, sendMessage, match, ...props}) => {
    
  const [valueInput, setValueInput] = useState<string>('')

  useEffect(() => {
    requestUsers()
  }, [requestUsers])
  

  if (!!match) {
    if (Number(match.params.userId) === 12) {
      console.log('В Url есть число 12!')
    }
  }


  const changeInput = (e: ChangeEvent<HTMLInputElement>) => {
    setValueInput(e.target.value)
  }

  const addPost = () => {
    addPostCreator(valueInput)
    setValueInput('')
  }

  const sendMessageInForm = (value: string) => {
    sendMessage(value)
  }
  
  // return <Redirect to='/about'/>

  let messagesElements = props.users.map(m => <div key={m.id}>{m.message}</div>);
  let persons = props.persons.map(u => <div key={u.id}>{u.name}</div>);
  let postMessages = props.postMessages.map(p => <div key={p.id}>{p.title}</div>);

  return (
    <>
      <TestPagePure messagesElements={messagesElements}
                    changeInput={changeInput}
                    valueInput={valueInput}
                    persons={persons}
                    sendMessageInForm={sendMessageInForm}
                    postMessages={postMessages}
                    addPost={addPost}/>
    </>
  );
}


let mapStateToProps = (state: AppStateType): MapStatePropsType => {
  return {
    users: getUsersSuperSelector(state),
    persons: getPersons(state),
    postMessages: getPostMessages(state),
  }
}
let mapDispatchToProps: MapDispatchPropsType = {
  addPostCreator: mainActions.addPostCreator,
  sendMessage: mainActions.sendMessage,
  requestUsers,
}


const TestPage = compose<React.ComponentType>(
  withRouter,
  connect<MapStatePropsType, MapDispatchPropsType, OwnPropsType, AppStateType>(mapStateToProps, mapDispatchToProps), // строгая последовательность типов!!!
)(TestPageContainer)

export default TestPage;