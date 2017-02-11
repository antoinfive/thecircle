import React from 'react';
import { connect } from 'react-redux'
import { updateMessage } from '../actions/messageActions'

export const LikeButton = (props) => { 
  return (
    <a className="btn-floating halfway-fab waves-effect waves-light red" onClick={handleOnClick.bind(null, props.id, props.updateLikes)}><i className="material-icons">thumb_up</i></a>
  )

  function handleOnClick(id, action){ 
    action(id) 
    const audio = document.getElementById('audio')
    audio.play()
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
