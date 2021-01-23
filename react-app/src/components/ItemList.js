import React, { Component } from 'react'

class ItemList extends Component {
  render () {
    return (
      <div className="ItemList">
        <input type="button" value="Create"></input>
        <input type="button" value="Update"></input>
        <input type="button" value="Delete"></input>
        <ul>
          <li>Welcome</li>
        </ul>
      </div>
    )
  }
}

export default ItemList
