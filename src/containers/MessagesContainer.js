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

  componentDidMount(){ 
    this._selectFormInit() 
  }
  

  _selectFormInit(){
    $('select').material_select();
  }
  render(){
    
    const cards = this.props.messages.map((data, index) => { 
      return <MessageCard 
        key={index} 
        id={data.id} 
        user={data.user} 
        message={data.message} 
        img={data.imageSrc}
        likes={data.likes}
        />
    })
    
    return ( 
      <div>
        <div className="col s8"> {cards} </div> 
        <MessageForm newMessage={this.props.newMessageWithGiphy} mood="happy"/>
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
    newMessageWithGiphy: messageActions.newMessageWithGiphy
  }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(MessagesContainer)
