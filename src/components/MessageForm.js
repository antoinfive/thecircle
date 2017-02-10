import React from 'react'
import styles from '../styles/styles'

export default class MessageForm extends React.Component {
  constructor(){
    super()
    this.state = {
      input: ''
    }

    this.handleOnSubmit = this.handleOnSubmit.bind(this)
    this.handleOnChange = this.handleOnChange.bind(this)
  }

 handleOnSubmit(event){
  event.preventDefault()
  let payload = { user: 'testing', message: this.state.input, mood: this.props.mood} 
  this.props.newMessage(payload) 
  this.setState({ input: ''}) 
 }

 handleOnChange(event){
  event.preventDefault()
  this.setState({
    input: event.target.value
  })
 }
 render(){
  return ( 
     <div className="col s4">
       <form className="col s12" onSubmit={this.handleOnSubmit}>
          <div className="input-field col s12"> 
            <input placeholder="say something nice"
              id="message" 
              className="validate"
              name='message'
              value={this.state.input}
              onChange={this.handleOnChange}
            />
         </div>
       </form> 
      </div>
  ) 
 }
}


