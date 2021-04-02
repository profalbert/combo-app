import React, { useState, useEffect } from 'react'
import TodoForm from '../components/TodoForm'
import TodoList from '../components/TodoList'
import { TodoType } from '../types/types'
import { CSSTransition } from 'react-transition-group'
import { connect } from 'react-redux'
import { AppStateType } from '../redux/redux-store'

// declare var confirm: (question: string) => boolean // объявляем глобальную переменную

type MapStatePropsType = {}
type MapDispatchPropsType = {}
type OwnPropsType = {}
type PropsType = MapStatePropsType & MapDispatchPropsType & OwnPropsType

const TodosPageContainer: React.FC<PropsType> = (props) => {
  const [todos, setTodos] = useState<TodoType[]>([])
  const [isCatalog, setIsCatalog] = useState<boolean>(true)

  useEffect(() => {
    // забираем элементы из localStorage
    let saved = JSON.parse(localStorage.getItem('todos') || '[]') as TodoType[]
    setTodos(saved)
  }, [])

  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos))
  }, [todos])

  const addHandler = (title: string) => {
    const newTodo: TodoType = {
      title: title,
      id: Date.now(),
      completed: false,
    }
    // setTodos([newTodo, ...todos]) // эта запись не гарантирует того, что мы будем работать с предыдущим стейтом
    setTodos((prev) => [newTodo, ...prev]) // а эта гарантирует
  }

  const addHandlerEdit = (id: number, title: string) => {
    setTodos((prev) =>
      prev.map((todo) => {
        if (todo.id === id) {
          todo.title = title
        }
        return todo
      }),
    )
  }

  const toggleHandler = (id: number) => {
    setTodos((prev) =>
      prev.map((todo) => {
        if (todo.id === id) {
          todo.completed = !todo.completed
        }
        return todo
      }),
    )
  }

  const removeHandler = (id: number) => {
    setTodos((prev) => prev.filter((todo) => todo.id !== id))
  }

  return (
    <>
      <ul className={'ulWrap'}>
        <li
          className={`ulWrapLi1 ${isCatalog ? 'ulWrapLi1Down' : 'ulWrapLi1Up'}`}
        >
          <input type={'checkbox'} id={'ulWrapLi1'}></input>
          <label onClick={() => setIsCatalog(!isCatalog)} htmlFor='ulWrapLi1'>
            Catalog
          </label>
        </li>
        <li className={'ulWrapLi2'}>
          <CSSTransition
            in={isCatalog}
            timeout={750}
            classNames={'CSSTransAlert'}
            mountOnEnter
            unmountOnExit
          >
            <div className={'CSSTransAlertBlock'}>
              <TodoForm onAdd={addHandler} />
              <TodoList
                onAddEdit={addHandlerEdit}
                todos={todos}
                onToggle={toggleHandler}
                onRemove={removeHandler}
              />
            </div>
          </CSSTransition>
        </li>
      </ul>
    </>
  )
}

let mapStateToProps = (state: AppStateType): MapStatePropsType => {
  return {}
}
let mapDispatchToProps: MapDispatchPropsType = {}

const TodosPage = connect<
  MapStatePropsType,
  MapDispatchPropsType,
  OwnPropsType,
  AppStateType
>(
  mapStateToProps,
  mapDispatchToProps,
)(TodosPageContainer)

export default TodosPage
