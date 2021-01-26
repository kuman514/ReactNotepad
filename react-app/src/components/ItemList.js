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
    let _data = this.props.data
    for (let i = 0; i < _data.length; i++) {
      _article.push(
        <li key={_data[i].id}>
          <a
            href={"/content/" + _data[i].id}
            data-id={_data[i].id}
            onClick={function (e) {
              e.preventDefault()
              //console.log(e)
              this.props.onChangePage(e.target.dataset.id)
            }.bind(this)}
          >
            {_data[i].title}
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
