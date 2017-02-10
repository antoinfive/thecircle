import React from 'react'
import styles from '../styles/styles'

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
 }

 handleOnSubmit(event){
  event.preventDefault()
  let payload = { user: 'testing', message: this.state.input, mood: this.state.mood } 
  this.props.newMessage(payload) 
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


