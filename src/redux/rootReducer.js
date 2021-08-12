import { combineReducers } from "redux"
import CONST from "./const"

function counterReducer(state = 0, action) {

   switch (action.type) {
      case CONST.INCREMENT:
         return state + 1
      case CONST.DECREMENT:
         return state - 1
      case CONST.ASYNC_INCREMENT:
         return
      default:
         return state
   }
}

function themeReducer(state = "", action) {
   switch (action.type) {
      case CONST.CHANGE_THEME:
         return action.payload
      default:
         return state
   }
}

function asyncActionsReducer(state = false, action) {
   switch (action.type) {
      case CONST.START_ASYNC:
         return true
      case CONST.FINISH_ASYNC:
         return false
      default:
         return state
   }
}


const rootReducer = combineReducers({
   counter: counterReducer,
   theme: themeReducer,
   async_in_progress: asyncActionsReducer
})

export default rootReducer