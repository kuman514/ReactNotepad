import React, { Component } from 'react'

class ReadContent extends Component {
  render () {
    return (
      <div className="ReadContent">
        <h2>{this.props.data.title}</h2>
        <p>{this.props.data.detail}</p>
      </div>
    )
  }
}

export default ReadContent
