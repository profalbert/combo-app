import React from 'react';
import {useState} from 'react';
// import {useRef} from 'react';
import {connect} from 'react-redux';
import {validateString} from '../validators/validators';
import TextField from '@material-ui/core/TextField';
import { makeStyles, withStyles } from '@material-ui/core/styles';
import {teal} from '@material-ui/core/colors';
import {mainActions} from '../redux/main-reducer';
import { AppStateType } from '../redux/redux-store';


const CssTextField = withStyles({
  root: {
    '& label.Mui-focused': {
      color: teal[400],
    },
    '& .MuiInput-underline:after': {
      borderBottomColor: 'green',
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

const useStyles = makeStyles((theme) => ({
  textField: {
    width: '100%',
    '& input': {
      height: 'auto',
      width: '100%',
    },
  },  
}));


type MapStatePropsType = {
  propsIsEditTodo: boolean
}
type MapDispatchPropsType = {
  setDataModalWindow: (isOpen: boolean, title?: string | null | undefined) => void
}
type OwnPropsType = {
  onAdd(title: string): void
}
type PropsType = MapStatePropsType & MapDispatchPropsType & OwnPropsType


const TodoFormContainer: React.FC<PropsType> = ({onAdd, propsIsEditTodo, setDataModalWindow}) => {
  const classes = useStyles();

  const [title, setTitle] = useState<string>('')
  // const ref = useRef<HTMLInputElement>(null)
  
  const changeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTitle(e.target.value)
  }

  const keyPressHandler = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      let limitInLocalstorage = JSON.parse(localStorage.getItem('todos') || '[]')

      if (limitInLocalstorage.length < 50) {
        const titleEnd: string | boolean | undefined = validateString(title, 200)
        if(titleEnd && typeof titleEnd === 'string') {
          onAdd(titleEnd)
        } else {
          setDataModalWindow(true, "You filled the field incorrectly!");
        }      
      } else {
        setDataModalWindow(true, "Sorry, but the limit for adding tasks is over!");
      }      
      
      // ref.current!.value = ''
      setTitle('')
    }
  }

  return (
    <div className="editInputField">
      <div className="input-field">        
        <CssTextField 
          onKeyPress={keyPressHandler} // для кнопки (в данном случае Enter)
          onChange={changeHandler} 
          disabled={!propsIsEditTodo}
          value={title} 
          className={classes.textField}
          // ref={ref}
          label="Enter case name"
          id="outlined-basic" variant="outlined"
        />
      </div>
    </div>    
  );
}


let mapStateToProps = (state: AppStateType): MapStatePropsType => {
  return {
    propsIsEditTodo: state.mainApp.propsIsEditTodo
  }
}
let mapDispatchToProps: MapDispatchPropsType = {
  setDataModalWindow: mainActions.setDataModalWindow
}


const TodoForm = connect<MapStatePropsType, MapDispatchPropsType, OwnPropsType, AppStateType>(mapStateToProps, mapDispatchToProps)(TodoFormContainer)

export default TodoForm;