import CONST from "./const";

export const increment = () => ({
   type: CONST.INCREMENT
})

export const decrement = () => ({
   type: CONST.DECREMENT
})

const startAsyncAction = () => ({
   type: CONST.START_ASYNC
})

const finishAsyncAction = () => ({
   type: CONST.FINISH_ASYNC
})


export const asyncIncrement = () => {
   return (dispatch) => {
      dispatch(startAsyncAction())
      setTimeout(() => {
         dispatch(increment())
         dispatch(finishAsyncAction())
      }, 2000)
   }
}

export const changeTheme = (newTheme) => ({
   type: CONST.CHANGE_THEME,
   payload: newTheme
})
