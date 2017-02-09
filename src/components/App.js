import React from 'react'
import NavBar from '../common/NavBar'
import MessageCard from './MessageCard'
import ContentWrapper from '../common/ContentWrapper'

export default class App extends React.Component {
  render() {
    return (
      <div>
        <NavBar />
        <ContentWrapper>
          <MessageCard title="Rose Golden" message='the samurai'/>
          <MessageCard title="Rose Golden" message='oh since I was young'/>
        </ContentWrapper>
      </div>
    )
  }
}
