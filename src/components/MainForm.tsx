import React from 'react';
import {reduxForm, reset, InjectedFormProps} from 'redux-form';
import {maxLengthCreator} from '../validators/validators';
import {createField, Input} from '../FormControls/FormControls';
import s from '../pages/TestPage.module.css';
import { DispatchType, AddMessageFormValuesType } from '../types/types';


type AddMessageFormOwnProps = {}
type AddMessageFormValuesKeysType = Extract<keyof AddMessageFormValuesType, string>


const maxLengthCreator10 = maxLengthCreator(10)

const AddMessageForm: React.FC<InjectedFormProps<AddMessageFormValuesType, AddMessageFormOwnProps> & AddMessageFormOwnProps> = ({handleSubmit}) => {
  return (
    <div>
      <form className={s.messagesForm} onSubmit={handleSubmit}>
        <div>
          {createField<AddMessageFormValuesKeysType>("Enter your message", "newMessageBody", [maxLengthCreator10], Input, "text", 'onSubmit')}
        </div>
        <div>
          <button className={s.messagesFormButton}>Send</button>
        </div>
      </form>
    </div>
  )
}


const afterSubmit = (result: object, dispatch: DispatchType) =>
  dispatch(reset('TestFirstForm'));
    
const AddMessageFormRedux = reduxForm<AddMessageFormValuesType & AddMessageFormOwnProps>({
  form: 'TestFirstForm',
  onSubmitSuccess: afterSubmit
})(AddMessageForm);


export default AddMessageFormRedux