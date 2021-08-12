import './styles.css'
import { createStore, applyMiddleware, compose } from 'redux'
import rootReducer from './redux/rootReducer'
import { decrement, increment, asyncIncrement, changeTheme } from './redux/actions'
import thunk from 'redux-thunk';
import logger from 'redux-logger'
import { composeWithDevTools } from 'redux-devtools-extension';


const counter = document.querySelector("#counter")
const addBtn = document.querySelector("#add")
const subBtn = document.querySelector("#sub")
const asyncBtn = document.querySelector("#async")
const themeBtn = document.querySelector("#theme")

// function logger(state) {
//    return function (next) {
//       return function (action) {
//          console.log(action)
//          console.log(state.getState())
//          next(action)
//          console.log("=====================")
//          console.log(state.getState())
//       }
//    }
// }  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()

const store = createStore(rootReducer,
   composeWithDevTools(
      applyMiddleware(thunk, logger)
   ))

store.subscribe(() => {
   counter.textContent = store.getState().counter
})
store.subscribe(() => {
   document.body.className = store.getState().theme
})
store.subscribe(() => {
   addBtn.disabled = store.getState().async_in_progress
   subBtn.disabled = store.getState().async_in_progress
   themeBtn.disabled = store.getState().async_in_progress
   asyncBtn.disabled = store.getState().async_in_progress
})
store.dispatch({ type: "__INIT_APP__" })

addBtn.addEventListener('click', () => {
   store.dispatch(increment())
})

subBtn.addEventListener('click', () => {
   store.dispatch(decrement())
})

asyncBtn.addEventListener('click', () => {
   store.dispatch(asyncIncrement())
})

themeBtn.addEventListener('click', () => {
   const newTheme = document.body.className ? "" : "dark"
   store.dispatch(changeTheme(newTheme))
})

