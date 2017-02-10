import React from 'react'

export default (props) => {
  return (
    <div className="row"> 
     <div className="col s9">
       <div className="card">
         <div className="card-image">
           <img src="http://i.giphy.com/5scJh8meluWwU.gif" />
             <span className="card-title">{props.user}</span>
             <a className="btn-floating halfway-fab waves-effect waves-light red"><i className="material-icons">thumb_up</i></a>
           </div>
           <div className="card-content">
             <p>{props.message}</p>
           </div>
         </div>
       </div>
     </div> 
   )
}
