import React, { Component } from 'react'

class CreateContent extends Component {
  render () {
    return (
      <article>
        <h2>Create a note</h2>
        <form>
          <p><input type="text" placeholder="Insert title here"></input></p>
          <p><input type="textarea" placeholder="Insert detail here"></input></p>
          <p><input type="submit"></input></p>
        </form>
      </article>
    )
  }
}

export default CreateContent
