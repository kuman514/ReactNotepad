import React, { Component } from 'react'

class ReadContent extends Component {
  render () {
    return (
      <article>
        <h2>{this.props.data.title}</h2>
        <p>{this.props.data.detail}</p>
      </article>
    )
  }
}

export default ReadContent
