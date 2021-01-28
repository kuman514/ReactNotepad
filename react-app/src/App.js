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
    this.addingId = 4
    this.appName = 'React Notepad'
    this.state = {
      mode: 'welcome',
      readingItemId: 0,
      welcome: {title: 'Welcome', detail: 'This is a notepad using React.'},
      content: [
        {id: 1, title: 'Sample 1', detail: 'This is a sample text.'},
        {id: 2, title: 'Sample 2', detail: 'What is your favorite food?'},
        {id: 3, title: 'Sample 3', detail: 'I don\'t feel good until the test is over.'},
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
        _article = <CreateContent onSubmit={function (_title, _detail) {
          let addArr = this.state.content.concat(
            {id: this.addingId, title: _title, detail: _detail}
          )
          let _readId = this.addingId
          this.addingId++
          this.setState({
            content: addArr,
            mode: 'read',
            readingItemId: _readId
          })
        }.bind(this)}></CreateContent>
        break
      case 'update':
        if (this.state.readingItemId === 0) {
          _article = <article><h3>Select an item first.</h3></article>
        } else {
          _article = <UpdateContent data={this.state.content[this.getItemData()]}
            onSubmit={function (_id, _title, _detail) {
              let modArr = Array.from(this.state.content)
              for (let i = 0; i < modArr.length; i++) {
                if (modArr[i].id === _id) {
                  modArr[i] = {
                    id: _id,
                    title: _title,
                    detail: _detail
                  }
                  break
                }
              }
              this.setState({
                content: modArr,
                mode: 'read',
                readingItemId: _id
              })
            }.bind(this)}>
          </UpdateContent>
        }
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
            onChangeMode={function (_mode) {
              switch (_mode) {
                case 'delete':
                  if (this.state.readingItemId === 0) {
                    this.setState({
                      mode: 'welcome',
                      readingItemId: 0
                    })
                  } else {
                    let delIndex = this.getItemData()
                    if (window.confirm('Are you sure to delete ' + this.state.content[delIndex].title + '?')) {
                      let delArr = Array.from(this.state.content)
                      delArr.splice(delIndex, 1)
                      this.setState({
                        mode: 'welcome',
                        content: delArr,
                        readingItemId: 0
                      })
                    }
                  }
                  break
                case 'load':
                  let target = this
                  let input = document.createElement('input')
                  input.type = 'file'
                  input.accept = '.csv'
                  input.onchange = function (e) {
                    let reader = new FileReader()
                    reader.onload = function () {
                      let newArr = []
                      let highestId = 0
                      let getBackup = reader.result.split(/\r\n|\n/).slice(0, -1)
                      for (let i = 0; i < getBackup.length; i++) {
                        let current = getBackup[i].split(',')
                        if (Number(current[0]) > highestId) {
                          highestId = Number(current[0])
                        }
                        newArr.push({
                          id: Number(current[0]),
                          title: current[1],
                          detail: current[2]
                        })
                      }
                      target.setState({
                        mode: 'welcome',
                        content: newArr,
                        readingItemId: 0
                      })
                      target.addingId = highestId + 1
                      console.log(target.addingId)
                    }
                    reader.readAsBinaryString(e.target.files[0], 'utf-8')
                  }
                  input.click()
                  break
                case 'save':
                  let saveCsv = 'data:text/csv;charset=utf-8,'
                  for (let i = 0; i < this.state.content.length; i++) {
                    let row = this.state.content[i].id + ',' + this.state.content[i].title + ',' + this.state.content[i].detail
                    saveCsv += (row + '\n')
                  }
                  let encodeUri = encodeURI(saveCsv)
                  console.log(encodeUri)
                  break
                default:
                  this.setState({
                    mode: _mode,
                  })
              }
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
