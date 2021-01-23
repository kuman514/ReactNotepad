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
    this.appName = 'React Notepad'
    this.state = {
      mode: 'welcome',
      readingItemId: 0,
      welcome: {title: 'Welcome', detail: 'This is a notepad using React.'},
      content: [
        {id: 1, title: 'Sample 1', detail: 'This is a sample text.'},
        {id: 2, title: 'Sample 2', detail: 'What is your favorite food?'},
        {id: 3, title: 'Sample 3', detail: 'I don\' feel good until the test is over.'},
      ]
    }
  }
  getItemData () {
    for (let i = 0; i < this.state.content.length; i++) {
      if (this.state.content[i].id === this.state.readingItemId) {
        return i
      }
    }
    return -1
  }
  getContent () {
    let _article = null
    let _index = -1
    switch (this.state.mode) {
      case 'welcome':
        _article = <ReadContent data={this.state.welcome}></ReadContent>
        break
      case 'read':
        _index = this.getItemData()
        if (_index === -1) {
          _article = <ReadContent data={this.state.welcome}></ReadContent>
        } else {
          _article = <ReadContent data={this.state.content[_index]}></ReadContent>
        }
        break
      case 'create':
        break
      case 'update':
        break
      default:
    }
    return _article
  }
  render () {
    return (
      <div className="App">
        <Header
          appName={this.appName}
          onChangePage={function () {
            this.setState({
              mode: 'welcome',
              readingItemId: 0
            })
          }.bind(this)}
        >
        </Header>
        <div className="NoteBody">
          <ItemList
            data={this.state.content}
            onChangePage={function (targetId) {
              //console.log('onChangePage')
              this.setState({
                mode: 'read',
                readingItemId: Number(targetId)
              })
            }.bind(this)}
          >
          </ItemList>
          {this.getContent()}
        </div>
      </div>
    )
  }
}

export default App
