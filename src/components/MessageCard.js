import React from 'react'
import { connect } from 'react-redux'
import LikeButton from './likeButton'
import { updateMessage } from '../actions/messageActions'

export default (props) => { 

  return (
    <div className="row"> 

     <div className="col s9">
       <div className="card">
         <div className="card-image">
           <img src={props.img || "http://i.giphy.com/5scJh8meluWwU.gif"} />
             <span className="card-title">{props.user}</span>
              <LikeButton id={props.id}/>
           </div>
           <div className="card-content">
             <p> {props.likes} </p>
             <p>{props.message}</p>
           </div>
         </div>
       </div>
     </div> 
   )
}

