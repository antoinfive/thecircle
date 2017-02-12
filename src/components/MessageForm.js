import React from 'react'
import styles from '../styles/styles'
import randomInteger from '../services/randomInteger'

export default class MessageForm extends React.Component {
  constructor(){
    super()
    this.state = {
      input: '',
      mood: 'happy'
    }

    this.handleOnSubmit = this.handleOnSubmit.bind(this)
    this.handleOnChange = this.handleOnChange.bind(this)
    this.handleMoodChange = this.handleMoodChange.bind(this)
  }

 componentDidMount(){
   this.handleSelectChange()
   socket.on('chat message', (message) => { 
    this.props.newMessage(message) 
   })
 }

 handleOnSubmit(event){
  event.preventDefault()
  let id = randomInteger(0, 10000) 
  let payload = {id: id, user: 'testing', message: this.state.input, mood: this.state.mood, likes: 0  } 
  socket.emit('chat message', payload) 
  this.setState({ input: ''}) 
 }

 handleOnChange(event){
  event.preventDefault()
  this.setState({
    input: event.target.value
  })
 }
 
 handleMoodChange(event){
   event.preventDefault() 
   this.setState({mood: event.target.value})
 }
  
  handleSelectChange(){
    $('#moodPicker').on('change', 'select', this.handleMoodChange );
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

          <div id="moodPicker" className="input-field col s12">
            <select value={this.state.mood} > 
              <option value="" disabled > Choose One </option>
              <option value="happy"> Happy </option>
              <option value="excited"> Excited </option>
              <option value="sad"> Sad </option>
              <option value="confused"> Confused </option>
              <option value="disappointed"> Disappointed </option>
              <option value="naruto"> Mystery </option>
            </select>
            <label> Pick a Mood For Your Message</label>
          </div>
          <button className="btn waves-effect waves-light" type="submit" name="action">Submit <i className="material-icons right">send</i> </button>    
       </form> 
      </div>
  ) 
 }
}


