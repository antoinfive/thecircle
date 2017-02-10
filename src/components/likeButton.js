import React from 'react';
  

export default () => { 
  return (
    <a className="btn-floating halfway-fab waves-effect waves-light red" onClick={handleOnClick}><i className="material-icons">thumb_up</i></a>
  )
}

function handleOnClick(){
  console.log('did the things')
 const audio = document.getElementById('audio')
  audio.play()
}
