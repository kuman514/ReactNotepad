import React, { Component } from 'react'

class ItemList extends Component {
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
        <input type="button" value="Create"></input>
        <input type="button" value="Update"></input>
        <input type="button" value="Delete"></input>
        <ul>
          {_article}
        </ul>
      </div>
    )
  }
}

export default ItemList
