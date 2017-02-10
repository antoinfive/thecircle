import React from 'react'
import LikeButton from './likeButton'

export default (props) => { 
  return (
    <div className="row"> 
     <div className="col s9">
       <div className="card">
         <div className="card-image">
           <img src={props.img || "http://i.giphy.com/5scJh8meluWwU.gif"} />
             <span className="card-title">{props.user}</span>
              <LikeButton />
           </div>
           <div className="card-content">
             <p>{props.message}</p>
           </div>
         </div>
       </div>
     </div> 
   )
}
