import React from 'react';
import { connect } from 'react-redux'
import { updateMessage } from '../actions/messageActions'

export const LikeButton = (props) => { 
  return (
    <a className="btn-floating halfway-fab waves-effect waves-light red" onClick={handleOnClick.bind(null, props.id, props.updateLikes)}><i className="material-icons">thumb_up</i></a>
  )

  function handleOnClick(id, action){ 
    debugger 
    socket.emit('like update', id)
    socket.on('like update', (id) =>{
      audio.play()
    }) 
     action(id) 
    const audio = document.getElementById('audio')
  }
}

function mapDispatchToProps(dispatch){
  return {
    updateLikes: (id) =>{
      dispatch(updateMessage(id))
    }
  } 
}

export default connect(null, mapDispatchToProps)(LikeButton)
