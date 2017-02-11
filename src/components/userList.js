import React from 'react'
import { connect } from 'react-redux'

export const UserList = (props) => {
  const users = props.users.map((user) => {
    return (
      <li className="collection-item teal-lighten 2">
        <span className="title"> {user.name}</span>
        <p> Circle Cred: {user.circleCred}<br/> Circle Rank: {user.circleRank} </p> 
      </li>) 
    })

  return (
    <div className="col s4"> 
      <ul className="collection with-header">
        <li className="collection-header"><h4>Circlers</h4></li>
        { users } 
      </ul> 
    </div>
  )  
}


function mapStateToProps(state, ownProps){
  return {
    users: state.users
  } 
}

export default connect(mapStateToProps)(UserList)
