import React, { Component } from 'react'
import './App.css'
import Header from './components/Header'
import ItemList from './components/ItemList'
import ReadContent from './components/ReadContent'
import CreateContent from './components/CreateContent'
import UpdateContent from './components/UpdateContent'

class App extends Component {
  constructor (props) {
    super(props)
    this.addingId = 2
    this.state = {
      mode: 'welcome',
      readingItemId: 0,
      welcome: {title: 'Welcome', detail: 'This is a notepad using React.'},
      content: [
        {id: 1, title: 'Sample', detail: 'This is a sample text.'}
      ]
    }
  }
  render () {
    return (
      <div className="App">
        <Header></Header>
        <div className="NoteBody">
          <ItemList data={this.state.content}></ItemList>
          <UpdateContent></UpdateContent>
        </div>
      </div>
    )
  }
}

export default App
