import React, {useState, useEffect, ChangeEvent} from 'react';
import {mainActions} from '../redux/main-reducer';
import {connect} from 'react-redux';
import {validateString} from '../validators/validators';
import { green, teal, red, orange } from '@material-ui/core/colors';
import Checkbox, { CheckboxProps } from '@material-ui/core/Checkbox';
import { makeStyles, withStyles, Theme } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import DeleteIcon from '@material-ui/icons/Delete';
import TextField from '@material-ui/core/TextField';
import { AppStateType } from '../redux/redux-store';
import { TodoType } from '../types/types';


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

const GreenCheckbox = withStyles({
  root: {
    color: green[400],
    width: 'min-content',
    '&$checked': {
      color: green[600],
    },
  },
  checked: {},
})((props: CheckboxProps) => <Checkbox color="default" {...props} />);

const useStyles = makeStyles((theme: Theme) => ({
  buttonEdit: {
    backgroundColor: teal[400],
    color: '#fff', 
    '&:hover': {
      backgroundColor: teal[600],
    },  
    fontSize:' 12px',
    marginRight: '15px',
  },
  buttonDelete: {
    padding: '3px',
  },
  buttonSave: {
    backgroundColor: orange[700],
    color: '#fff', 
    '&:hover': {
      backgroundColor: orange[500],
    },  
    fontSize:' 12px',
    marginRight: '15px',
  },
  buttonCancel: {
    backgroundColor: teal[400],
    color: '#fff', 
    '&:hover': {
      backgroundColor: teal[600],
    },  
    fontSize:' 12px',
  },
}));


type MapStatePropsType = {
  followingInProgress: Array<number>
}
type MapDispatchPropsType = {
  toggleFollowingProgress: (isFollowingProgress: boolean, id: number) => void
  setPropsIsEditTodo: (isEditTodo: boolean) => void
  setDataModalWindow: (isOpen: boolean, title?: string | null | undefined) => void
}
type OwnPropsType = {
  onAddEdit: (id: number, title: string) => void 
  todos: TodoType[]
  onToggle: (id: number) => void
  onRemove: (id: number) => void
}
type PropsType = MapStatePropsType & MapDispatchPropsType & OwnPropsType



const TodoListContainer: React.FC<PropsType> = ({todos, onRemove, onToggle, followingInProgress, toggleFollowingProgress, onAddEdit, setPropsIsEditTodo, setDataModalWindow}) => {
  const classesStyles = useStyles();

  const [isEditTodo, setIsEditTodo] = useState<boolean>(false)
  const [valueTodos, setValueTodos] = useState<Array<TodoType>>( JSON.parse(JSON.stringify(todos)) )


  useEffect(() => {
    setValueTodos(JSON.parse(JSON.stringify(todos)))
  }, [todos])


  const removeHandler = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>, id: number) => {
    e.preventDefault()
    onRemove(id)
  }


  const editTodo = (id: number) => {
    setIsEditTodo(!isEditTodo)
    toggleFollowingProgress(true, id)
    setPropsIsEditTodo(false)
  }


  const addNewPostEdit = (id: number) => {
    setIsEditTodo(!isEditTodo)
    const title = valueTodos.filter(todoChange => id === todoChange.id).map(item => item.title)[0]
    const titleEnd: string | boolean | undefined = validateString(title, 500)

    if (titleEnd) {
      onAddEdit(id, title)
    } else {
      setValueTodos(JSON.parse(JSON.stringify(todos)))
      setDataModalWindow(true, "You filled the field incorrectly!");
    }

    toggleFollowingProgress(false, id)
    setPropsIsEditTodo(true)
  }

  
  const cancelNewPostEdit = (id: number) => {
    setIsEditTodo(!isEditTodo)
    toggleFollowingProgress(false, id)
    setPropsIsEditTodo(true)
    setValueTodos(JSON.parse(JSON.stringify(todos)))
  }


  const changeHaldlerTodo = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>, id: number) => {
    let inputValueCache = e.target.value
    setValueTodos(prev =>  
      prev.map(todo => {        
        if (todo.id === id) {
          todo.title = inputValueCache
        }        
        return todo
      })
    )
  }


  if (todos.length === 0) {
    return <p className="center">While there is no things</p>
  }

  return (
    <div className="pb2">
      <ul>
        {todos.map(todo => {
          const classes = ['todo']
          if (todo.completed) {
            classes.push('completed')
          }
          
          return (
            <li className={classes.join(" ")} key={todo.id}>
              <label className={"labelTodo"} htmlFor={`${todo.id}`}>

                  {(followingInProgress.some(id => id === todo.id) && isEditTodo)
                  ? <>
                      <CssTextField
                        id="outlined-multiline-static"
                        label="Multiline"
                        multiline
                        onChange={(e) => changeHaldlerTodo(e, todo.id)}
                        rowsMax={3}
                        autoFocus={true}
                        value={valueTodos.filter(todoChange => todo.id === todoChange.id).map(item => item.title)[0]}
                        variant="outlined"
                      />
                    </>
                  : <div className={"inputWrap"}>                   
                      <GreenCheckbox disabled={isEditTodo} id={`${todo.id}`} checked={todo.completed} onChange={() => onToggle(todo.id)}/>
                      <span className={'inputWrapInput'}>{todo.title}</span>
                    </div> 
                  } 

              </label>              
              <div className={`btnWrap`}>

                {(followingInProgress.some(id => id === todo.id) && isEditTodo)
                ? <>
                    <Button color="inherit" disabled={!isEditTodo} onClick={() => addNewPostEdit(todo.id)} className={`${classesStyles.buttonSave}`} variant="contained">
                      save
                    </Button>
                    <Button color="inherit" disabled={!isEditTodo} onClick={() => cancelNewPostEdit(todo.id)} className={`${classesStyles.buttonCancel}`} variant="contained">
                      cancel
                    </Button>
                  </>
                : <>
                    <Button color="inherit" disabled={isEditTodo} onClick={() => editTodo(todo.id)} className={`${classesStyles.buttonEdit}`} variant="contained">
                      edit
                    </Button>
                    <IconButton disabled={isEditTodo} onDoubleClick={(e) => removeHandler(e, todo.id)} className={`${classesStyles.buttonDelete}`} aria-label="delete">
                      <DeleteIcon style={{ color: isEditTodo ? '#00000042' : red['A700'] }}/>
                    </IconButton>                   
                  </>
                }  

              </div> 
                  
            </li>
          )
        })}        
      </ul>
    </div>
  );
}


let mapStateToProps = (state: AppStateType): MapStatePropsType => {
  return {
    followingInProgress: state.mainApp.followingInProgress
  }
}
let mapDispatchToProps: MapDispatchPropsType = {
  toggleFollowingProgress: mainActions.toggleFollowingProgress,
  setPropsIsEditTodo: mainActions.setPropsIsEditTodo,
  setDataModalWindow: mainActions.setDataModalWindow,
}


const TodoList = connect<MapStatePropsType, MapDispatchPropsType, OwnPropsType, AppStateType>(mapStateToProps, mapDispatchToProps)(TodoListContainer)

export default TodoList;