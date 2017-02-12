import initialState from './initialState'

export default function messagesReducer(state=initialState, action) {
  switch(action.type) {
    case 'NEW_MESSAGE': 
      return [action.payload, ...state]
    case 'UPDATE_MESSAGE': 
      return state.map((message) => {
        if(message.id !== action.id){
          return message
        } else {
         
          let newMessage = Object.assign({}, message, {likes: ++message.likes})
          return newMessage 
        }
      }) 
      default: 
      return state 
  }
}
