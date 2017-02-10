import React from 'react'

export default (props) => {
  return (
    <div className="container"> 
      <div className="row">
        {props.children} 
      </div>
    </div>
  )

}
