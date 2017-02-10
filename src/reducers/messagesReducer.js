import initialState from './initialState'

export default function messagesReducer(state=initialState, action) {
  switch(action.type) {
    case 'NEW_MESSAGE':
      return [action.payload, ...state]
    default: 
      return state 
  }
}
