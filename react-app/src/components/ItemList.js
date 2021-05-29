import React, { Component } from 'react'

class ItemList extends Component {
  shouldComponentUpdate (newProps, newState) {
    if (this.props.data === newProps.data) {
      return false
    } else {
      return true
    }
  }
  render () {
    let _article = []
    let _content = this.props.data.content
    let _reading = this.props.data.reading
    for (let i = 0; i < _content.length; i++) {
      let _className = ''
      if (_reading === _content[i].id) {
        _className = 'selected'
      }
      _article.push(
        <li key={_content[i].id}>
          <a
            href={"/content/" + _content[i].id}
            data-id={_content[i].id}
            onClick={function (e) {
              e.preventDefault()
              //console.log(e)
              this.props.onChangePage(e.target.dataset.id)
            }.bind(this)}
            className={_className}
          >
            {_content[i].title}
          </a>
        </li>
      )
    }
    return (
      <div className="ItemList">
        <ul>
          <li><a
            href="/create"
            onClick={function (e) {
              e.preventDefault()
              this.props.onChangeMode('create')
            }.bind(this)}
          >
            Create
          </a></li>
          <li><a
            href="/update"
            onClick={function (e) {
              e.preventDefault()
              this.props.onChangeMode('update')
            }.bind(this)}
          >
            Update
          </a></li>
          <li><input
            type="button"
            value="Delete"
            onClick={function (e) {
              e.preventDefault()
              this.props.onChangeMode('delete')
            }.bind(this)}
          >
          </input></li>
          <li><input
            type="button"
            value="Save Backup"
            onClick={function (e) {
              e.preventDefault()
              this.props.onChangeMode('save')
            }.bind(this)}
          >
          </input></li>
          <li><input
            type="button"
            value="Load Backup"
            onClick={function (e) {
              e.preventDefault()
              this.props.onChangeMode('load')
            }.bind(this)}
          >
          </input></li>
        </ul>
        <ul>
          {_article}
        </ul>
      </div>
    )
  }
}

export default ItemList
