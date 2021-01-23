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
  getContent () {
    let _article = null
    switch (this.state.mode) {
      case 'welcome':
        _article = <ReadContent data={this.state.welcome}></ReadContent>
        break
      case 'read':
        _article = <ReadContent></ReadContent>
        break
      case 'create':
        break
      case 'update':
        break
    }
    return _article
  }
  render () {
    return (
      <div className="App">
        <Header></Header>
        <div className="NoteBody">
          <ItemList data={this.state.content}></ItemList>
          {this.getContent()}
        </div>
      </div>
    )
  }
}

export default App
