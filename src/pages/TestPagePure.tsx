import React, { ChangeEvent } from 'react';
import s from './TestPage.module.css';
import AddMessageFormRedux from '../components/MainForm';
import { AddMessageFormValuesType } from '../types/types';


type PropsType = {
  messagesElements: Array<JSX.Element>
  persons: Array<JSX.Element>
  postMessages: Array<JSX.Element>
  valueInput: string
  sendMessageInForm: (value: string) => void
  addPost: () => void
  changeInput: (e: ChangeEvent<HTMLInputElement>) => void
}

const TestPagePure: React.FC<PropsType> = ({messagesElements, valueInput, persons, postMessages, sendMessageInForm, addPost, changeInput}) => {
  let addNewMessage = (values: AddMessageFormValuesType) => {
    (!!values.newMessageBody) && sendMessageInForm(values.newMessageBody);
  }

  return (
    <>
      <div>
        <div>
          <input value={valueInput} onChange={(e: ChangeEvent<HTMLInputElement>) => changeInput(e)} type="textarea"/>
        </div>
        <div>
          <button className={s.mainTestButton} onClick={() => addPost()}>Add post</button>
        </div>
        <div>
          {messagesElements}
        </div>

        <br/>
        <br/>
        
        <div>
          {persons}
        </div>

        <br/>
        <br/>

        <div>
          <AddMessageFormRedux onSubmit={addNewMessage} initialValues={{"newMessageBody": "hihi"}}/>
        </div>
        <div>
          {postMessages}
        </div>
      </div>
    </>
  );
}


export default TestPagePure;