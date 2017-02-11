import { users } from './initialState.js'

export default function usersReducer(state=users, action){
  switch(action.type){
    case 'FETCH_USERS':
      return state
    default:
      return state
  } 
}
