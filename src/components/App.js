import React from 'react'
import NavBar from '../common/NavBar'
import MessageCard from './MessageCard'
import ContentWrapper from '../common/ContentWrapper'
import MessagesContainer from '../containers/MessagesContainer' 
import UserList from '../components/userList' 

export default class App extends React.Component {

  componentDidMount(){ 
    socket.on('joined', (user) => {
      alert(`user: ${user} connected`)
    })   
  }

  render() {
    return (
      <div>
        <NavBar />
        <ContentWrapper>
          <MessagesContainer /> 
          <UserList />
        </ContentWrapper>
      </div>
    )
  }
}
