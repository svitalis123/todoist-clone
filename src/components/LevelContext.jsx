import React, { useContext, createContext, useReducer } from 'react'



export default function LevelContext({children}) {
  const [tasks, dispatch] = useReducer(mainReducer, initialstore);
  return (
    <taskContext.Provider value={tasks}>
      <dispatchContext.Provider value={dispatch}>
        {children}
      </dispatchContext.Provider>
    </taskContext.Provider>
  )
}

function mainReducer(state, action) {
  switch (action.type) {
    case 'ADD_PROJECT':
      return {
        ...state,
        projects: [
          ...state.projects,
          {
            title: action.payload.title,
            todos:[]
          }
        ]
      }
    case 'ADD_TASK':
      return {
        ...state,
        projects: state.projects.map((project) => {
         return  project.title === action.payload.project ? {...project, todos:[...project.todos, {id: action.payload.id, title: action.payload.title, des: action.payload.des, done: false}]} : project
        })
      }
    case 'EDIT_TASK':
      return {
        ...state,
        projects: state.projects.map((project) => {
          return project.title === action.payload.project ? {...project, 
            todos: project.todos.map((todo) => {
              return todo.id === action.payload.todo.id ? {...todo, des: action.payload.todo.des} : todo}
            )
          }: project
        })
    }
    case 'EDIT_check':
      return {
        ...state,
        projects: state.projects.map((project) => {
          return project.title === action.payload.project ? {...project, 
            todos: project.todos.map((todo) => 
              todo.id === action.payload.todo.id ? {...todo, done: action.payload.todo.done} : todo
            )
          }: project
        })
      }
    case 'DELETE_TASK':
      return {
        ...state,
        projects: state.projects.map((project) => {
          return project.title === action.payload.project ? {...project, todos: project.todos.filter((todo) => todo.id !== action.payload.id)} : project
        })
    }
    default:
      Error(() => "hello you encountered error")
      break;
  }
  
}

const initialstore = {
  projects: [{title: "inbox", todos:[]},{title: "Education", todos:[]}],
  visibilityFilter: "visibility_filter"
}

const taskContext = createContext(null);
const dispatchContext =  createContext(null);

export function Thetask(){
  return useContext(taskContext);
}

export function Thedispatch() {
  return useContext(dispatchContext);
}
