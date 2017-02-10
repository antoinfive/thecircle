import React from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as messageActions from '../actions/messageActions'
import MessageCard from '../components/MessageCard'
import MessageForm from '../components/MessageForm'

class MessagesContainer extends React.Component {
  constructor(){
    super() 
  }


  render(){
    
    const cards = this.props.messages.map((data) => { 
      return <MessageCard user={data.user} message={data.message} />
    })
    
    return ( 
      <div>
        <div className="col s8"> {cards} </div> 
        <MessageForm newMessage={this.props.newMessage}/>
      </div>
    )   
  }  
} 


function mapStateToProps(state, ownProps){
  return {
    messages: state.messages
  } 
}

function mapDispatchToProps(dispatch){
  return bindActionCreators({
    newMessage: messageActions.newMessage 
  }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(MessagesContainer)
