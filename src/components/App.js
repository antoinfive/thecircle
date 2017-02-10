import React from 'react'
import NavBar from '../common/NavBar'
import MessageCard from './MessageCard'
import ContentWrapper from '../common/ContentWrapper'
import MessagesContainer from '../containers/MessagesContainer'
import MessageForm from '../components/MessageForm'

export default class App extends React.Component {
  render() {
    return (
      <div>
        <NavBar />
        <ContentWrapper>
          <MessagesContainer /> 
        </ContentWrapper>
      </div>
    )
  }
}
