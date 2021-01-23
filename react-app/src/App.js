import React, { Component } from 'react'
import './App.css'
import Header from './components/Header'
import ItemList from './components/ItemList'
import ReadContent from './components/ReadContent'
import CreateContent from './components/CreateContent'
import UpdateContent from './components/UpdateContent'

class App extends Component {
  render () {
    return (
      <div className="App">
        <Header></Header>
        <div className="NoteBody">
          <ItemList></ItemList>
          <UpdateContent></UpdateContent>
        </div>
      </div>
    )
  }
}

export default App
